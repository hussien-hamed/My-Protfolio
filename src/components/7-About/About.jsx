import "./About.css";
import logo from "../../../public/Hussien.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className="About flex">
      {/* ===== Right Section (الصورة) ===== */}
      <motion.div
        className="right-section-about"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} // ⬅️ المفتاح هنا
      >
        <div className="image-decor-container">
          <img src={logo} alt="Hussien" className="about-image" />
        </div>
      </motion.div>

      <motion.div
        className="left-section-about"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} // ⬅️ نفس الشيء هنا
      >
        <h2>
          <span>About</span> Me
        </h2>
        <p className="sub-title">
          I am a Software Engineering graduate from the University of Homs,
          Syria, specializing in Front-End development with React. I have built
          numerous responsive and dynamic web projects using modern web
          technologies. In addition to my front-end expertise, I am proficient
          in C++ and have solved over 400 problems on Codeforces, showcasing my
          strong problem-solving and algorithmic skills.
        </p>

        <a href="#skills" className="cv">
          Learn More
        </a>
      </motion.div>
    </section>
  );
};

export default About;
