import { FetchUsers } from '@/use-cases/fetch-users'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const usersBodySchema = z.object({
  name: z.string().optional(),
})

export async function users(request: FastifyRequest, reply: FastifyReply) {
  const fetchUsers = new FetchUsers()

  const { name } = usersBodySchema.parse(request.params)

  const result = await fetchUsers.execute({ name })

  const users = result.users.map((user) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  })

  return reply.status(200).send({ users })
}
