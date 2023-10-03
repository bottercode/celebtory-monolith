import Fastify from 'fastify'
import config from './configs/server.js'
import cors from '@fastify/cors'
import { corsConfig } from './configs/cors.js'

const fastify = Fastify({
  logger: true
})

fastify.register(cors, { ...corsConfig })

fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

try {
  await fastify.listen({ port: config.PORT, host: config.HOST })
  console.info(`Server is listening on ${fastify.server.address().port}`)
} catch (err) {
  fastify.log.error(1)
  process.exit(1)
}
