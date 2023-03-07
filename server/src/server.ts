import Fastify from 'fastify'
import cors from '@fastify/cors'
import { Routers } from './routes'

const app = Fastify()
app.register(cors)
app.register(Routers)

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server running on http://localhost:3333')
})