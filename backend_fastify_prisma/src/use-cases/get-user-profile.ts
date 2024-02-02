import type { User } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetuserProfileUseCaseRequest {
  userId: string
}

interface GetuserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  async execute({
    userId,
  }: GetuserProfileUseCaseRequest): Promise<GetuserProfileUseCaseResponse> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}
