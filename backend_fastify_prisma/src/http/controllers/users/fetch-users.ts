import { FetchUsers } from '@/use-cases/fetch-users'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const usersBodySchema = z.object({
  name: z.string().optional(),
  page: z
    .string()
    .optional()
    .default('1')
    .transform(Number)
    .pipe(z.number().min(1)),
})

export async function fetchUsers(request: FastifyRequest, reply: FastifyReply) {
  const fetchUsers = new FetchUsers()

  const { name, page } = usersBodySchema.parse(request.query)

  const result = await fetchUsers.execute({ name, page })

  const users = result.users.map((user) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  })

  const meta = result.meta

  return reply.status(200).send({ users, meta })
}
