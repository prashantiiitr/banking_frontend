import { useState } from 'react';

import toast from 'react-hot-toast';

import api from '../api/axios';

function ResetPasswordPage() {
  const [email, setEmail] =
    useState('');

  const [
    password,
    setPassword,
  ] = useState('');

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('');

  const handleReset =
    async (
      e: React.FormEvent,
    ) => {
      e.preventDefault();

      if (
        password !==
        confirmPassword
      ) {
        toast.error(
          'Passwords do not match',
        );

        return;
      }

      try {
        await api.post(
          '/auth/reset-password',
          {
            email,
            password,
          },
        );

        toast.success(
          'Password reset successful',
        );
      } catch {
        toast.error(
          'Reset failed',
        );
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[450px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Reset Password
        </h1>

        <form
          onSubmit={handleReset}
          className="space-y-4"
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
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={
              confirmPassword
            }
            onChange={(e) =>
              setConfirmPassword(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-black text-white p-3 rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;