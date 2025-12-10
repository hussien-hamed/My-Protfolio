import "./hero.css";
import devAnimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import logo from "/hussien.png";

const Hero = () => {
  const lottieRef = useRef();
  const fullText = "Frontend Developer • React Specialist • Creative Coder";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const nextChar = fullText.charAt(index);
      if (nextChar) {
        setDisplayedText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const icons = [
    {
      icon: faFacebookF,
      bgColor: "#33333393",
      link: "https://www.facebook.com/profile.php?id=100044531438129",
    },
    ,
    {
      icon: faLinkedinIn,
      bgColor: "#33333393",
      link: "https://www.linkedin.com/in/hussien-alhamed-727072292",
    },
    {
      icon: faGithub,
      bgColor: "#33333393",
      link: "https://github.com/hussien-hamed",
    },
  ];

  return (
    <section className="hero">
      {/* ===== اليسار ===== */}
      <motion.div
        className="left-section-hero"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="parent-avatar flex">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            transition={{ damping: 8, type: "spring", stiffness: 100 }}
            src={logo}
            alt=""
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          {displayedText}
        </motion.h2>
        <p className="sub-title">
          Hi, I'm Hussien Alhamed — a Frontend Developer specialized in React. I
          craft modern, fast, and responsive web experiences that transform
          ideas into reality.
        </p>
        <div className="all-icons flex">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: item.bgColor,
                padding: "12px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ color: "white", fontSize: "20px" }}
              />
            </a>
          ))}
        </div>
        <a href="/Hussien_CV.docx" download className="cv">
          Download CV
        </a>
      </motion.div>

      {/* ===== اليمين ===== */}
      <motion.div
        className="right-section-hero animation"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Lottie
          animationData={devAnimation}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
