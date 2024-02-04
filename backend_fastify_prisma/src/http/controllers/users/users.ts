import { FetchUsers } from '@/use-cases/fetch-users'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function users(request: FastifyRequest, reply: FastifyReply) {
  const fetchUsers = new FetchUsers()

  const { data } = await fetchUsers.execute()

  const users = data.map((user) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  })

  return reply.status(200).send({ users })
}
