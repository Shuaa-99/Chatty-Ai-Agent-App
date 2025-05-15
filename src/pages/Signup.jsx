import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading-circle.json";
// import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, firstName, lastName);
      navigate("/HomePage");
    } catch (err) {
      setError("Failed to create account: " + err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      navigate("/HomePage");
    } catch (err) {
      setError("Failed to sign up with Google: " + err.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 px-4 overflow-hidden">

      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"
        aria-hidden="true"
      />


      <div className="absolute left-10 top-10 text-white z-10">
        <h1 className="text-5xl font-bold mb-4">Chat Application</h1>
        <p className="text-lg max-w-xs">
          It listens. It learns. It’s here to help <br /> your AI companion.
        </p>
      </div>


      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-center gap-8">

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="w-96 h-96">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-sm border border-white/20">
            <h2 className="text-3xl font-semibold text-white text-center mb-6">
              Sign up
            </h2>
            {error && <p className="text-red-400 text-center mb-4">{error}</p>}
            <form onSubmit={handleSignup}>
             
              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-white mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-white mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

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
                className="w-full bg-purple-500 text-white hover:bg-purple-600 p-3 rounded-xl hover:opacity-90 transition"
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-white my-4 opacity-70">OR</div>

            <button
              onClick={handleGoogleSignup}
              className="w-full bg-white text-purple-600 p-3 rounded-xl hover:opacity-90 transition"
            >
              Sign up with Google
            </button>

            <div className="text-white text-center mt-4 opacity-70">
              <span>Already have an account? </span>
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
