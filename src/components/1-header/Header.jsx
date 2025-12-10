import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setsTheme] = useState(
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

  return (
    <motion.header
      className="flex"
      initial={{ y: -100, opacity: 0 }} // يبدأ من الأعلى
      animate={{ y: 0, opacity: 1 }} // يتحرك إلى مكانه الطبيعي
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* 👇 كلمة البروتفوليو */}
      <div className="logo">Portfolio</div>

      {/* 👇 زر القائمة */}
      <button
        onClick={() => setshowModal(true)}
        className="menu icon-menu flex"
      />

      <nav>
        <ul className="flex">
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

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setsTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowModal(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articals</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
