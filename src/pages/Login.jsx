import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading-circle.json"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/HomePage");
    } catch (err) {
      setError("Failed to login: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/HomePage");
    } catch (err) {
      setError("Failed to login with Google: " + err.message);
    }
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 overflow-hidden px-4">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] 
      [background-size:24px_24px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:flex w-1/2 flex-col justify-center items-start pl-16 space-y-6 text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Chatty</h1>
            <p className="text-lg max-w-xs">
              It listens. It learns. It’s here to help <br /> your AI companion.
            </p>
          </div>
          <div className="w-full max-w-[500px] h-auto">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-sm border border-white/20">
            <h2 className="text-3xl font-semibold text-white text-center mb-6">
              Sign in
            </h2>
            {error && <p className="text-red-400 text-center mb-4">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white hover:bg-purple-600 p-3 rounded-xl transition"
              >
                Sign in
              </button>
            </form>

            <div className="text-center text-white my-4 opacity-70">OR</div>

            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white text-purple-600 p-3 rounded-xl hover:opacity-90 transition"
            >
              Sign in with Google
            </button>

            <div className="text-white text-center mt-4 opacity-70">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-blue-400 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
