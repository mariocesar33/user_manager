import { FetchUsers } from '@/use-cases/fetch-users'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function users(request: FastifyRequest, reply: FastifyReply) {
  const fetchUsers = new FetchUsers()

  const { users } = await fetchUsers.execute()

  const newDada = users.map((user) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  })

  return reply.status(200).send({ newDada })
}
