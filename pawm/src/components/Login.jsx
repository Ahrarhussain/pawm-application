import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { ReactComponent as GoogleLogo } from "../images/GoogleLogo.svg";
// Material UI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // optional: show a spinner here
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to top, #3b846bff 0%, #b2eee9ff 100%)",
        position: "relative"
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Login
        </h2>
        {/* Username and Password using MUI TextField */}
        <TextField
          label="Username"
          variant="outlined"
          size="medium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ background: "#ffffffff", borderRadius: '0.75rem' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          size="medium"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ background: "#ffffffff", borderRadius: '0.75rem' }}
        />
        <div className="flex items-center justify-between mb-2">
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                sx={{ color: "#060606ff" }}
              />
            }
            label="Remember me"
          />
          <Link
            to="/reset"
            className="text-purple-800 hover:underline text-xs"
          >
            Forgot password
          </Link>
        </div>
        {/* Login Button using MUI */}
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#000000",
            borderRadius: "0.75rem",
            textTransform: "none",
            boxShadow: 3,
            fontWeight: 600,
            ":hover": { bgcolor: "#494949ff" }
          }}
          className="mb-4"
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        >
          Login
        </Button>
        {/* Google Login Option */}
        <Button
          variant="contained"
          size="large"
          startIcon={<GoogleLogo className="w-5 h-5" />}
          sx={{
            bgcolor: "#d86060ff",
            borderRadius: "0.75rem",
            textTransform: "none",
            fontWeight: 600,
            ":hover": { bgcolor: "#c05c5cff" }
          }}
          onClick={signInWithGoogle}
        >
          Login with Google
        </Button>
        <div className="text-center mt-6">
          <Link
            to="/register"
            className="block text-purple-800 font-semibold py-2 hover:underline text-base"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
