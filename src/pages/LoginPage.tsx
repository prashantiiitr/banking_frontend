
function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

