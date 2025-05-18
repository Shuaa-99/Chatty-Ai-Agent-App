import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";
import ChatInterface from "./components/chat/ChatInterface";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import HomePage from "./pages/HomePage";
import "./index.css";
import TranscriptionPage from "./pages/TranscriptionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HomePage" element={<HomePage />} />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatInterface />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/TranscriptionPage"
          element={
            <ProtectedRoute>
              <TranscriptionPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
