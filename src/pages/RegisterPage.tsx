
import { useState } from 'react';

import toast from 'react-hot-toast';

import api from '../api/axios';

function RegisterPage() {
  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleRegister = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      await api.post(
        '/auth/register',
        {
          name,
          email,
          password,
        },
      );

      toast.success(
        'Registration successful',
      );
    } catch (error) {
      toast.error(
        'Registration failed',
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

