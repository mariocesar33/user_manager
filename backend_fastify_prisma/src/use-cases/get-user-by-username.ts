import type { User } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetUserByUsernameResponse {
  user: User
}

interface GetUserByUsernameRequest {
  username: string
}

export class GetUserByUsername {
  async execute({
    username,
  }: GetUserByUsernameRequest): Promise<GetUserByUsernameResponse> {
    const user = await prisma.user.findUnique({
      where: {
        username,
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
