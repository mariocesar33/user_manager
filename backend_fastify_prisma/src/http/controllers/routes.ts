import { FastifyInstance } from 'fastify'

// import { verifyJWT } from '../middlewares/verify-jwt'
import { register } from './users/register'
import { authenticate } from './users/authenticate'
import { refresh } from './users/refresh-token'

export async function routes(app: FastifyInstance) {
  // app.addHook('onRequest', verifyJWT)

  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)
}
