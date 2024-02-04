import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'

interface FetchUsersRequest {
  name?: string
}

interface FetchUsersResponse {
  users: User[]
}

export class FetchUsers {
  async execute({ name }: FetchUsersRequest): Promise<FetchUsersResponse> {
    let users

    console.log(name)

    if (name) {
      users = await prisma.user.findMany({
        where: {
          name: {
            mode: 'insensitive',
            startsWith: name,
          },
        },
      })
    } else {
      users = await prisma.user.findMany()
    }

    return {
      users,
    }
  }
}
