'use strict'

const corsConfig = {}

corsConfig.origin = process.env.WHITELISTED_CORS_DOMAIN
  ? process.env.WHITELISTED_CORS_DOMAIN.split(',').map((_) => _.trim())
  : []
corsConfig.credentials = true

export { corsConfig }
