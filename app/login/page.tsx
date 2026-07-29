export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          BETEL ADN
        </h1>

        <p className="mb-8 text-slate-500">
          Iniciar sesión
        </p>

        <form className="space-y-5">
          <input
            className="w-full rounded-xl border p-3"
            placeholder="Correo electrónico"
            type="email"
          />

          <input
            className="w-full rounded-xl border p-3"
            placeholder="Contraseña"
            type="password"
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