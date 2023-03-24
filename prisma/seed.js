const { PrismaClient } = require("@prisma/client")
const db = new PrismaClient()

async function seed() {
  await Promise.all(
    getUsers().map(user => {
      return db.user.create({ data: user })
    })
  )
}

seed()

function getUsers() {
  return [
    {
      name: 'SUPER ADMIN',
      cpf: '940.182.650-18',
      password: '12341234',
      phone: '16982161856',
      role: 'ADMIN'
    }
  ]
}