import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { RegisterUseCase as CreateUser } from '@/use-cases/register'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const createUserBodySchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string(),
  address: z.string(),
  role: z.enum(['ADMIN', 'CLIENT']).default('CLIENT'),
  stato: z.coerce.boolean().default(true),
  avatarURL: z.string().url(),
})

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const {
    name,
    username,
    email,
    password,
    phone,
    address,
    role,
    stato,
    avatarURL,
  } = createUserBodySchema.parse(request.body)

  try {
    const createUser = new CreateUser()

    await createUser.execute({
      name,
      username,
      email,
      password,
      phone,
      address,
      role,
      stato,
      avatarURL,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
