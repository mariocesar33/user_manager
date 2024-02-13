'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { api } from '@/lib/axios'

export async function addProduct(formData: FormData) {
  const registerProductBodySchema = z.object({
    name: z.string().min(3),
    password: z.string().min(1),
    stato: z.coerce.boolean(),
    email: z.string().email(),
    phone: z.string(),
    role: z.enum(['ADMIN', 'CLIENT']),
    address: z.string(),
  })

  const { name, password, stato, email, phone, role, address } =
    registerProductBodySchema.parse(Object.fromEntries(formData))

  try {
    await api.post('/product', {
      name,
      password,
      stato,
      email,
      phone,
      role,
      address,
    })
  } catch (e) {
    return { message: 'Failed to create product' }
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}
