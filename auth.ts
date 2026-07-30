import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      name: "Credenciales",

      credentials: {
        email: {
          label: "Correo",
          type: "email",
        },

        password: {
          label: "Contraseña",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          return null;
        }

        if (!user.password) {
          return null;
        }

        const passwordMatch = await verifyPassword(
          credentials.password as string,
          user.password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (
          session.user as typeof session.user & {
            id?: string;
            role?: string;
          }
        ).id = token.sub ?? "";

        (
          session.user as typeof session.user & {
            id?: string;
            role?: string;
          }
        ).role = (token.role as string) ?? "EDITOR";
      }

      return session;
    },
  },
});