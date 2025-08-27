import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const handleReset = async () => {
    if (!email) return alert("Please enter your email");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send reset email");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Reset Password
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          onClick={handleReset}
          className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Send Password Reset Email
        </button>

        <div className="mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-yellow-600 font-semibold hover:underline">
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
}
