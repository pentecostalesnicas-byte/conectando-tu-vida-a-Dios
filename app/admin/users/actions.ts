"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
  role:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "PASTOR"
    | "LIDER"
    | "EDITOR";
}) {
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    throw new Error("Ya existe un usuario con ese correo.");
  }

  const { hashPassword } = await import("@/lib/password");

  const hashedPassword = await hashPassword(data.password);

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
      active: true,
    },
  });

  revalidatePath("/admin/users");
}

export async function updateUser(
  id: string,
  data: {
    name: string;
    email: string;
    role:
      | "SUPER_ADMIN"
      | "ADMIN"
      | "PASTOR"
      | "LIDER"
      | "EDITOR";
    active: boolean;
  }
) {
  await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  revalidatePath("/admin/users");
}

export async function toggleUserStatus(
  id: string
) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      active: true,
    },
  });

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      active: !user.active,
    },
  });

  revalidatePath("/admin/users");
}

export async function deleteUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      role: true,
    },
  });

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  if (user.role === "SUPER_ADMIN") {
    throw new Error(
      "No se puede eliminar el SUPER_ADMIN."
    );
  }

  await prisma.user.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/users");
}