import { FetchProducts } from '@/use-cases/fetch-products'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const productsBodySchema = z.object({
  title: z.string().optional(),
  page: z
    .string()
    .optional()
    .default('1')
    .transform(Number)
    .pipe(z.number().min(1)),
})

export async function fetchProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchProducts = new FetchProducts()

  const { title, page } = productsBodySchema.parse(request.query)

  const { products, meta } = await fetchProducts.execute({ title, page })

  return reply.status(200).send({ products, meta })
}
