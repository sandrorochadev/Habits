import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.habit.deleteMany()
    
    await prisma.habit.create({
        data: {
            title: 'Beber 2 litros de água',
            created_at: new Date('2023-03-05T00:00:00.000Z'),
        }
    })    
}

main ()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })