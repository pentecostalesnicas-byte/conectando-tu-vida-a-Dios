import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "credentials",

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

      async authorize() {
        // La autenticación real con Prisma
        // la conectaremos en la siguiente entrega.
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
});