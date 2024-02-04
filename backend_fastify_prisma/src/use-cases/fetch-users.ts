import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'

interface FetchUsersRequest {
  name?: string
  page: number
}

interface FetchUsersResponse {
  users: User[]
}

export class FetchUsers {
  async execute({
    name,
    page,
  }: FetchUsersRequest): Promise<FetchUsersResponse> {
    let users

    const perPage = 2

    if (name) {
      users = await prisma.user.findMany({
        where: {
          name: {
            mode: 'insensitive',
            startsWith: name,
          },
        },
        take: perPage,
        skip: (page - 1) * perPage,
      })
    } else {
      users = await prisma.user.findMany({
        take: perPage,
        skip: (page - 1) * perPage,
      })
    }

    return {
      users,
    }
  }
}
