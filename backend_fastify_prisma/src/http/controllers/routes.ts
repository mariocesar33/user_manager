import { FastifyInstance } from 'fastify'

import { verifyJWT } from '../middlewares/verify-jwt'
import { register } from './users/register'
import { authenticate } from './users/authenticate'
// import { refresh } from './users/refresh-token'

import { profile } from './users/profile'
import { createUser } from './users/create-users'
import { fetchUsers } from './users/fetch-users'
import { fetchProducts } from './products/fetch-products'

export async function routes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // app.patch('/token/refresh', refresh)

  app.post('/user', { onRequest: [verifyJWT] }, createUser)
  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.get('/user', fetchUsers)

  app.get('/product', fetchProducts)
}
