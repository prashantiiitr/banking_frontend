import { useState } from 'react';

import toast from 'react-hot-toast';

import api from '../api/axios';

function ForgotPasswordPage() {
  const [email, setEmail] =
    useState('');

  const handleSubmit =
    async (
      e: React.FormEvent,
    ) => {
      e.preventDefault();

      try {
        await api.post(
          '/auth/forgot-password',
          {
            email,
          },
        );

        toast.success(
          'Password reset OTP sent',
        );
      } catch {
        toast.error(
          'Failed to send OTP',
        );
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[450px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Forgot Password
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-black text-white p-3 rounded-lg">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;