
function OtpVerificationPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[450px]">
        <h1 className="text-3xl font-bold text-center">
          OTP Verification
        </h1>

        <p className="text-slate-500 text-center mt-3">
          Enter OTP sent to your email
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border p-4 rounded-xl"
          />

          <button
            className="w-full bg-black text-white p-4 rounded-xl"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerificationPage;

