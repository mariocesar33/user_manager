import { FastifyInstance } from 'fastify'

import { verifyJWT } from '../middlewares/verify-jwt'
import { register } from './users/register'
import { authenticate } from './users/authenticate'
import { refresh } from './users/refresh-token'

import { profile } from './users/profile'
import { createUser } from './users/create-users'
import { users } from './users/users'
import { getUserByUsername } from './users/get-user-by-username'

export async function routes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.post('/user', { onRequest: [verifyJWT] }, createUser)
  app.get('/user', users)
  app.get('/user/:username', { onRequest: [verifyJWT] }, getUserByUsername)
}
