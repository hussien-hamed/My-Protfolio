import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newMode = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newMode);
    setTheme(newMode);
  };

  return (
    <motion.header
      className="flex header-container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="logo">Portfolio</div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
      />

      {/* Desktop Navigation */}
      <nav>
        <ul className="flex nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#myproject">My Projects</a>
          </li>
          <li>
            <a href="#Certificates">Certificates</a>
          </li>
          <li>
            <a href="#contactus">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="mode flex">
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {/* Mobile Modal */}
      {showModal && (
        <div className="fixed modal-bg">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="#About" onClick={() => setShowModal(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setShowModal(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#myproject" onClick={() => setShowModal(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Certificates" onClick={() => setShowModal(false)}>
                Certificates
              </a>
            </li>
            <li>
              <a href="#contactus" onClick={() => setShowModal(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
