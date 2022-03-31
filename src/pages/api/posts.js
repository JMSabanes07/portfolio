// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const post = await prisma.post.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        image: true,
        variants: true,
      },
    })

    res.status(200).json(post)
  }
}

export default handler
