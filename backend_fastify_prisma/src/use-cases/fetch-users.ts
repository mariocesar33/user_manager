import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'

interface FetchUsersRequest {
  name?: string
  page: number
}

interface FetchUsersResponse {
  users: User[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export class FetchUsers {
  async execute({
    name,
    page,
  }: FetchUsersRequest): Promise<FetchUsersResponse> {
    let users
    let totalCount

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

      totalCount = await prisma.user.count({
        where: {
          name: {
            mode: 'insensitive',
            startsWith: name,
          },
        },
      })
    } else {
      users = await prisma.user.findMany({
        take: perPage,
        skip: (page - 1) * perPage,
      })

      totalCount = await prisma.user.count()
    }

    const meta = {
      pageIndex: page - 1,
      perPage,
      totalCount,
    }

    return {
      users,
      meta,
    }
  }
}
