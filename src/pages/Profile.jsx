import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Sidebar from "../components/chat/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";
import { FiEdit2, FiSave, FiTrash2 } from "react-icons/fi";
import { updateProfile } from "firebase/auth";


const Profile = () => {
  const { currentUser } = useAuth();
  const [showApiKey, setShowApiKey] = useState(false);
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [firstName, setFirstName] = useState(
    currentUser?.displayName?.split(" ")[0] || ""
  );
  const [lastName, setLastName] = useState(
    currentUser?.displayName?.split(" ")[1] || ""
  );
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");
  const [editingApiKey, setEditingApiKey] = useState(false);
  const { isDarkMode } = useDarkMode();

  const saveUserChanges = async () => {
    const newDisplayName = `${firstName} ${lastName}`.trim();
    try {
      await updateProfile(currentUser, {
        displayName: newDisplayName,
      });
      setIsEditingUser(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  const saveApiKey = () => {
    localStorage.setItem("apiKey", apiKey);
    setEditingApiKey(false);
  };

  const deleteApiKey = () => {
    localStorage.removeItem("apiKey");
    setApiKey("");
    setEditingApiKey(false);
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return (parts[0]?.[0] + (parts[1]?.[0] || "")).toUpperCase();
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
      }`}
    >
      <Sidebar />

      <div className="flex-1 flex items-center justify-center p-10">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
          {/* Avatar Card */}
          <div
            className={`flex-shrink-0 w-full lg:w-1/3 p-10 rounded-3xl border shadow-xl flex flex-col items-center gap-4 ${
              isDarkMode
                ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <div className="w-28 h-28 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl font-bold shadow-md">
              {getInitials(currentUser?.displayName)}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">
                {currentUser?.displayName || "User Name"}
              </h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-500"}>
                {currentUser?.email}
              </p>
            </div>
          </div>

          {/* Info Card */}
          <div
            className={`flex-grow p-10 rounded-3xl border shadow-xl space-y-6 ${
              isDarkMode
                ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">Account Details</h3>
              {!isEditingUser ? (
                <button
                  onClick={() => setIsEditingUser(true)}
                  className={`p-2 rounded-full ${
                    isDarkMode ? "hover:bg-white/20" : "hover:bg-gray-200"
                  }`}
                  title="Edit"
                >
                  <FiEdit2 size={18} />
                </button>
              ) : (
                <button
                  onClick={saveUserChanges}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm bg-purple-600 text-white hover:opacity-90 transition"
                >
                  <FiSave size={16} /> Save
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
              <div>
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  First Name
                </label>
                {isEditingUser ? (
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`p-3 rounded-lg w-full outline-none ${
                      isDarkMode
                        ? "bg-white/10 border border-white/20 text-white"
                        : "bg-gray-100 border border-gray-300 text-gray-900"
                    }`}
                  />
                ) : (
                  <div
                    className={`p-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-gray-100 border-gray-300 text-gray-900"
                    }`}
                  >
                    {firstName}
                  </div>
                )}
              </div>

          
              <div>
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Last Name
                </label>
                {isEditingUser ? (
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`p-3 rounded-lg w-full outline-none ${
                      isDarkMode
                        ? "bg-white/10 border border-white/20 text-white"
                        : "bg-gray-100 border border-gray-300 text-gray-900"
                    }`}
                  />
                ) : (
                  <div
                    className={`p-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-gray-100 border-gray-300 text-gray-900"
                    }`}
                  >
                    {lastName}
                  </div>
                )}
              </div>


              <div className="md:col-span-2">
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Email
                </label>
                <div
                  className={`p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                >
                  {currentUser?.email}
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  OpenAI API Key
                </label>
                <div
                  className={`flex items-center gap-3 rounded-lg px-4 py-2 border ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                >
                  <input
                    type={showApiKey ? "text" : "password"}
                    value={apiKey}
                    disabled={!editingApiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-transparent w-full outline-none font-mono"
                  />
                  <button
                    onClick={() => setShowApiKey((prev) => !prev)}
                    className={`text-sm ${
                      isDarkMode
                        ? "text-purple-300 hover:underline"
                        : "text-purple-600 hover:underline"
                    }`}
                  >
                    {showApiKey ? "Hide" : "Show"}
                  </button>
                  {!editingApiKey ? (
                    // <button
                    //   onClick={() => setEditingApiKey(true)}
                    //   className="text-sm text-blue-500 hover:underline"
                    // >
                    //   Edit
                    // </button>
                    <button
                      onClick={() => setEditingApiKey(true)}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      {apiKey ? "Edit" : "Add"}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={saveApiKey}
                        className="text-sm text-green-500 hover:underline"
                      >
                        Save
                      </button>
                      <button
                        onClick={deleteApiKey}
                        className="text-sm text-red-500 hover:underline"
                        title="Delete API Key"
                      >
                        <FiTrash2 />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
