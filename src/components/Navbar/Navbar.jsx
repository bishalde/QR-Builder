import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const [navlinksvalue, setnavlinks] = useState("nav-links");
  const [navbuttonsvlue, setnavbuttons] = useState("nav-buttons");
   const { isAuthenticated, logout } = useAuth();

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const navbarActive = () => {
    if (navlinksvalue === "nav-links") {
      setnavlinks("nav-links activenavlinks");
      setnavbuttons("nav-buttons activenavbuttons");
    } else {
      setnavlinks("nav-links");
      setnavbuttons("nav-buttons");
    }
  };
   const handleLogout = () => {
     const confirmLogout = window.confirm("Are you sure you want to log out?");
     if (confirmLogout) {
       logout(); 
       localStorage.removeItem("token"); 
     }
   };

  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="/logos/bigLogo_-_Crop-removebg-preview.png" />
          </NavLink>
        </div>

        <div className="hamberger" onClick={navbarActive}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={navlinksvalue}>
          {/* activepage */}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "active " : isActive ? "activepage" : ""
            }
            to="/"
            current="activepage"
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "active " : isActive ? "activepage" : ""
            }
            to="/pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "active " : isActive ? "activepage" : ""
            }
            to="/"
          >
            Solution
          </NavLink>
          <a
            className="active"
            href="https://github.com/bishalde/Qr-Code-Generator"
          >
            Github
          </a>
        </div>

        <div className={navbuttonsvlue}>
          {!isAuthenticated && (
            <>
              <NavLink to="/login">
                <button className="btn">Sign In</button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn btn-secondary">Sign Up</button>
              </NavLink>
            </>
          )}
          {isAuthenticated && (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
