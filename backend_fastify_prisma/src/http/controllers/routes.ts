import { FastifyInstance } from 'fastify'

// import { verifyJWT } from '../middlewares/verify-jwt'
import { register } from './users/register'

export async function routes(app: FastifyInstance) {
  // app.addHook('onRequest', verifyJWT)

  app.post('/users', register)
}
