"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/admin");
      router.refresh();
      return;
    }

    alert("Correo o contraseña incorrectos.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          BETEL ADN
        </h1>

        <p className="mb-8 text-slate-500">
          Iniciar sesión
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="w-full rounded-xl border p-3"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full rounded-xl border p-3"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}