import { api } from '@/lib/axios'

interface Product {
  id: string
  title: string
  description: string
  category: string
  size: string
  color: string
  price: number
  stock: number
  imgURL: string
  createdAt: string
  updatedAt: string
}

export interface FetchProductsResponse {
  products: Product[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface FetchProductsRequest {
  title?: string
  pageIndex: string
}

export async function fetchProducts({
  title,
  pageIndex,
}: FetchProductsRequest) {
  const response = await api.get<FetchProductsResponse>(
    `/product?page=${pageIndex}&title=${title}`,
  )

  return response.data
}
