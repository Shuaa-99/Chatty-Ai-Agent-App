// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom"; 
// import { useAuth } from "../../context/AuthContext";
// import { Link } from "react-router-dom";
// import {
//   Bot,
//   Mic,
//   User,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   Sun,
//   Moon,
// } from "lucide-react";
// import { useDarkMode } from "../../context/DarkModeContext";

// const Sidebar = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();
//   const { logout } = useAuth();
//   const location = useLocation(); 

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate("/");
//     } catch (err) {
//       console.error("Logout error", err);
//     }
//   };

//   return (
//     <div
//       className={`relative h-screen text-white flex flex-col transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       } bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900`}
//     >
//       <div
//         className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] 
//         [background-size:24px_24px] pointer-events-none z-0"
//         aria-hidden="true"
//       ></div>

//       <div className="relative z-10 flex flex-col h-full">
//         <div className="flex items-center justify-between p-4">
//           <Link to="/HomePage">
//             {!collapsed && <span className="text-xl font-bold">ChatAi</span>}
//           </Link>
//           <button onClick={toggleDarkMode}>
//             <span className="text-gray-400 hover:text-white flex items-center gap-2">
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </span>
//           </button>
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="text-gray-400 hover:text-white"
//           >
//             {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
//           </button>
//         </div>

//         <div className="flex-1 space-y-2 p-2">
//           <SidebarItem
//             icon={<Bot size={20} />}
//             label="Chatbot"
//             collapsed={collapsed}
//             onClick={() => navigate("/chat")}
//             active={location.pathname === "/chat"} 
//           />
//           <SidebarItem
//             icon={<Mic size={20} />}
//             label="Transcription"
//             collapsed={collapsed}
//             onClick={() => navigate("/TranscriptionPage")}
//             active={location.pathname === "/TranscriptionPage"}
//           />
//           <SidebarItem
//             icon={<User size={20} />}
//             label="Profile"
//             collapsed={collapsed}
//             onClick={() => navigate("/profile")}
//             active={location.pathname === "/profile"}
//           />
//         </div>

//         <div className="p-2 border-t border-gray-700">
//           <SidebarItem
//             icon={<LogOut size={20} />}
//             label="Logout"
//             collapsed={collapsed}
//             onClick={handleLogout}
//             className="text-red-400 hover:text-red-500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const SidebarItem = ({
//   icon,
//   label,
//   onClick,
//   collapsed,
//   className = "",
//   active = false,
// }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center gap-2 p-2 rounded w-full transition-all
//       ${active ? "bg-purple-800" : "hover:bg-gray-800"} ${className}`}
//   >
//     {icon}
//     {!collapsed && <span>{label}</span>}
//   </button>
// );

// export default Sidebar;

import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Bot,
  Mic,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <aside
      className={`hidden md:flex flex-col h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] 
        [background-size:24px_24px] pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <Link to="/HomePage">
            {!collapsed && <span className="text-xl font-bold">ChatAi</span>}
          </Link>
          <button onClick={toggleDarkMode}>
            <span className="text-gray-400 hover:text-white flex items-center gap-2">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <div className="flex-1 space-y-2 p-2">
          <SidebarItem
            icon={<Bot size={20} />}
            label="Chatbot"
            collapsed={collapsed}
            onClick={() => navigate("/chat")}
            active={location.pathname === "/chat"}
          />
          <SidebarItem
            icon={<Mic size={20} />}
            label="Transcription"
            collapsed={collapsed}
            onClick={() => navigate("/TranscriptionPage")}
            active={location.pathname === "/TranscriptionPage"}
          />
          <SidebarItem
            icon={<User size={20} />}
            label="Profile"
            collapsed={collapsed}
            onClick={() => navigate("/profile")}
            active={location.pathname === "/profile"}
          />
        </div>

        <div className="p-2 border-t border-gray-700">
          <SidebarItem
            icon={<LogOut size={20} />}
            label="Logout"
            collapsed={collapsed}
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500"
          />
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({
  icon,
  label,
  onClick,
  collapsed,
  className = "",
  active = false,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 p-2 rounded w-full transition-all ${
      active ? "bg-purple-800" : "hover:bg-gray-800"
    } ${className}`}
  >
    {icon}
    {!collapsed && <span>{label}</span>}
  </button>
);

export default Sidebar;
