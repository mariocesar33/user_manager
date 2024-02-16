import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { RegisterUseCase } from '@/use-cases/register'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const registerBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string(),
  address: z.string(),
  role: z.enum(['ADMIN', 'CLIENT']).default('CLIENT'),
  stato: z.coerce.boolean().default(true),
  avatarURL: z.string().optional(),
})

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password, phone, address, role, stato, avatarURL } =
    registerBodySchema.parse(request.body)

  try {
    const registerUseCase = new RegisterUseCase()

    await registerUseCase.execute({
      name,
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
