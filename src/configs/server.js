const config = {}

config.PORT = Number(process.env.SERVER_PORT ?? '80')
config.HOST = process.env.SERVER_HOST ?? '0.0.0.0'

export default config
