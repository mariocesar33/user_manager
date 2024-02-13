import { prisma } from '@/lib/prisma'
import { Product } from '@prisma/client'

interface FetchProductsRequest {
  title?: string
  page: number
}

interface FetchProductsResponse {
  products: Product[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export class FetchProducts {
  async execute({
    title,
    page,
  }: FetchProductsRequest): Promise<FetchProductsResponse> {
    let products
    let totalCount

    const perPage = 3

    if (title) {
      products = await prisma.product.findMany({
        where: {
          title: {
            mode: 'insensitive',
            startsWith: title,
          },
        },
        take: perPage,
        skip: (page - 1) * perPage,
      })

      totalCount = await prisma.product.count({
        where: {
          title: {
            mode: 'insensitive',
            startsWith: title,
          },
        },
      })
    } else {
      products = await prisma.product.findMany({
        take: perPage,
        skip: (page - 1) * perPage,
      })

      totalCount = await prisma.product.count()
    }

    const meta = {
      pageIndex: page - 1,
      perPage,
      totalCount,
    }

    return {
      products,
      meta,
    }
  }
}
