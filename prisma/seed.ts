import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Role } from "../lib/generated/prisma/client";

import { hashPassword } from "../lib/password";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Iniciando Seed...");

  const email = "admin@beteladn.org";

  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exists) {
    console.log("⚠️ SUPER_ADMIN ya existe.");
    return;
  }

  await prisma.user.create({
    data: {
      name: "Super Administrador",
      email,
      password: await hashPassword("Admin123*"),
      role: Role.SUPER_ADMIN,
      active: true,
    },
  });

  console.log("✅ SUPER_ADMIN creado.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });