import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // optional: show a spinner here
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Login Button */}
        <button
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition mb-4"
        >
          Login
        </button>

        {/* Google Login */}
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.68 1.22 9.17 3.6l6.85-6.85C35.69 2.6 30.24 0 24 0 14.65 0 6.65 5.35 2.68 13.1l7.98 6.2C12.16 13.15 17.63 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.59-.14-3.11-.39-4.59H24v9.19h12.65c-.55 2.85-2.2 5.27-4.68 6.89l7.27 5.64C43.94 37.2 46.5 30.94 46.5 24z"
            />
            <path
              fill="#FBBC05"
              d="M10.66 28.9a14.48 14.48 0 010-9.8l-7.98-6.2C.93 16.8 0 20.29 0 24s.93 7.2 2.68 11.1l7.98-6.2z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.24 0 11.69-2.05 15.59-5.57l-7.27-5.64c-2.02 1.36-4.62 2.16-8.32 2.16-6.37 0-11.84-3.65-13.34-8.8l-7.98 6.2C6.65 42.65 14.65 48 24 48z"
            />
          </svg>
          Login with Google
        </button>

        {/* Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <Link
            to="/reset"
            className="text-blue-600 hover:underline transition"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-2 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
