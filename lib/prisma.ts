// import { PrismaClient } from "@prisma/client"

// declare global {
//   var prisma: PrismaClient | undefined
// }

// export const prisma = global.prisma || new PrismaClient({})

// if (process.env.NODE_ENV !== "production") global.prisma = prisma

// import { PrismaClient } from "@prisma/client"

// declare global {
//   interface Global {
//     prisma: PrismaClient | undefined
//   }
// }

// let prisma: PrismaClient

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient()
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient()
//     }

//     prisma = global.prisma
//   }
// }

// export default prisma

import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient
  }
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient()
  }
  prisma = globalWithPrisma.prisma
}

export default prisma
