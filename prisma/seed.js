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
      fullname: 'ADMIN',
      cpf: '940.182.650-18',
      role: 'ADMIN'
    }
  ]
}