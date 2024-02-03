import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { GetUserByUsername } from '@/use-cases/get-user-by-username'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const getUserByUsernameSchema = z.object({
  username: z.string(),
})

export async function getUserByUsername(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { username } = getUserByUsernameSchema.parse(request.params)

  try {
    const getUserByUsername = new GetUserByUsername()

    const { user } = await getUserByUsername.execute({ username })

    return reply.status(201).send({
      user: {
        ...user,
        password: undefined,
      },
    })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }
}
