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
}

export interface FetchUsersRequest {
  name?: string
}

export async function fetchUsers({ name }: FetchUsersRequest) {
  const response = await api.get<FetchUsersResponse>(`/user/${name}`)

  return response.data
}
