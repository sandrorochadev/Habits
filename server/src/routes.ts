import { FastifyInstance } from 'fastify'
import { prisma } from "./lib/prisma"

export async function  Routers(app: FastifyInstance) { 
app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
     return habits
 })
}
