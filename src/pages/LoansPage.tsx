
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

import api from '../api/axios';

import { useAuthStore } from '../store/authStore';

function LoginPage() {
  const navigate = useNavigate();

  const setToken =
    useAuthStore(
      (state) => state.setToken,
    );

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      const response =
        await api.post(
          '/auth/login',
          {
            email,
            password,
          },
        );

      setToken(
        response.data.accessToken,
      );

      toast.success(
        'Login successful',
      );

      navigate('/');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
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
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value,
              )
            }
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

