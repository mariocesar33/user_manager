import { api } from '@/lib/axios'

interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  address: string
  role: 'ADMIN' | 'CLIENT'
  stato: boolean
  avatarURL: string
  createdAt: string
  updatedAt: string
}

export interface FetchUsersResponse {
  users: User[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface FetchUsersRequest {
  name?: string
  pageIndex: string
}

export async function fetchUsers({ name, pageIndex }: FetchUsersRequest) {
  const response = await api.get<FetchUsersResponse>(
    `/user?page=${pageIndex}&name=${name}`,
  )

  return response.data
}
