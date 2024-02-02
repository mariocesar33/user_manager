import { hash } from 'bcryptjs'
import type { User } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
  name: string
  username: string
  email: string
  password: string
  phone: string
  address: string
  role: 'ADMIN' | 'CLIENT'
  stato: boolean
  avatarURL?: string
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  async execute({
    name,
    username,
    email,
    password,
    phone,
    address,
    role,
    stato,
    avatarURL,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userExist = await prisma.user.findUnique({
      where: {
        username_email: {
          username,
          email,
        },
      },
    })

    if (userExist) {
      throw new UserAlreadyExistsError()
    }

    const passwordHash = await hash(password, 6)

    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: passwordHash,
        phone,
        address,
        role,
        stato,
        avatarURL,
      },
    })

    return {
      user,
    }
  }
}
