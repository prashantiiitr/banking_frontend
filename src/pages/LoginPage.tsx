import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../api/axios";

function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      const response =
        await api.post(
          "/auth/login",
          {
            email,
            password,
          },
        );

      localStorage.setItem(
        "token",
        response.data.accessToken,
      );

      toast.success(
        "Login Successful",
      );

      navigate("/");
    } catch (error: any) {
      toast.error(
        error?.response?.data
          ?.message ||
          "Login Failed",
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[420px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-black text-white p-3 rounded-lg">
            Login
          </button>

          <div className="flex justify-between text-sm">
            <Link
              to="/forgot-password"
              className="text-blue-600"
            >
              Forgot Password?
            </Link>

            <Link
              to="/register"
              className="text-blue-600"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;