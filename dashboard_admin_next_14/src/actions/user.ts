'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { api } from '@/lib/axios'

export async function addUser(formData: FormData) {
  const registerUserBodySchema = z.object({
    name: z.string().min(3),
    password: z.string().min(1),
    stato: z.coerce.boolean(),
    email: z.string().email(),
    phone: z.string(),
    role: z.enum(['ADMIN', 'CLIENT']),
    address: z.string(),
  })

  const { name, password, stato, email, phone, role, address } =
    registerUserBodySchema.parse(Object.fromEntries(formData))

  try {
    await api.post('/user', {
      name,
      password,
      stato,
      email,
      phone,
      role,
      address,
    })
  } catch (e) {
    return { message: 'Failed to create user' }
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}
