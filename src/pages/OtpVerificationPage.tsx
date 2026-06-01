import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import api from "../api/axios";

function OtpVerificationPage() {
  const [userId, setUserId] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [timer, setTimer] =
    useState(60);

  useEffect(() => {
    if (timer <= 0) return;

    const interval =
      setInterval(() => {
        setTimer(
          (prev) => prev - 1,
        );
      }, 1000);

    return () =>
      clearInterval(interval);
  }, [timer]);

  const verifyOtp =
    async () => {
      try {
        await api.post(
          "/otp/verify",
          {
            userId,
            otp,
          },
        );

        toast.success(
          "OTP Verified",
        );
      } catch {
        toast.error(
          "Invalid OTP",
        );
      }
    };

  const resendOtp =
    async () => {
      try {
        await api.post(
          "/otp/resend",
          {
            userId,
            purpose: "LOGIN",
          },
        );

        setTimer(60);

        toast.success(
          "OTP Sent Again",
        );
      } catch {
        toast.error(
          "Failed to resend OTP",
        );
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-[420px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Verify OTP
        </h1>

        <input
          type="text"
          placeholder="User ID"
          className="w-full border p-3 rounded-lg mb-4"
          value={userId}
          onChange={(e) =>
            setUserId(
              e.target.value,
            )
          }
        />

        <input
          type="text"
          placeholder="OTP"
          className="w-full border p-3 rounded-lg mb-4"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value,
            )
          }
        />

        <button
          onClick={verifyOtp}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Verify OTP
        </button>

        <div className="mt-4 text-center">
          {timer > 0 ? (
            <p>
              Resend OTP in{" "}
              {timer}s
            </p>
          ) : (
            <button
              onClick={
                resendOtp
              }
              className="text-blue-600"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationPage;