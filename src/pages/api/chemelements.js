import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const chemElements = await prisma.chemElements.findMany()
  res.json(chemElements)
}
