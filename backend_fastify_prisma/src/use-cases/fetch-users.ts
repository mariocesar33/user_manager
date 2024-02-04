import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'

interface FetchUsersResponse {
  data: User[]
}

export class FetchUsers {
  async execute(): Promise<FetchUsersResponse> {
    const data = await prisma.user.findMany()

    return {
      data,
    }
  }
}
