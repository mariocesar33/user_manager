import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'

interface FetchUsersResponse {
  users: User[]
}

export class FetchUsers {
  async execute(): Promise<FetchUsersResponse> {
    const users = await prisma.user.findMany()

    return {
      users,
    }
  }
}
