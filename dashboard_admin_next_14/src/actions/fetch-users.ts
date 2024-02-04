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

export interface fetchUsersResponse {
  users: User[]
}

export async function fetchUsers() {
  const response = await api.get<fetchUsersResponse>('/user')

  return response.data
}
