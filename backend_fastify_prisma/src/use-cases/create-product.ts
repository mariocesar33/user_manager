import type { Product } from '@prisma/client'

import { prisma } from '@/lib/prisma'

interface CreateProductUseCaseRequest {
  title: string
  description: string
  category: string
  size: string
  color: string
  price: number
  stock: number
  imgURL?: string
}

interface CreateProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  async execute({
    title,
    description,
    category,
    size,
    color,
    price,
    stock,
    imgURL,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = await prisma.product.create({
      data: {
        title,
        description,
        category,
        size,
        color,
        price,
        stock,
        imgURL,
      },
    })

    return {
      product,
    }
  }
}
