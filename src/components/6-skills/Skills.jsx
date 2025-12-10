import "./Skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Pagination, Navigation } from "swiper/modules";

const Skills = () => {
  const skills = [
    {
      name: "Html",
      icon: "/images/8.png",
      desc: "Strong experience in building structured and SEO-friendly web pages using HTML5 with clean and semantic code.",
    },
    {
      name: "Css",
      icon: "/images/7.png",
      desc: "Skilled in creating responsive and modern layouts using CSS3, including Flexbox and Grid for adaptive design.",
    },
    {
      name: "JavaScript",
      icon: "/images/9.png",
      desc: "Proficient in adding interactivity and dynamic behavior using modern JavaScript (ES6+).",
    },
    {
      name: "React Js",
      icon: "/images/10.png",
      desc: "Experienced in building modern, scalable, and interactive web applications using React.",
    },
    {
      name: "Tailwind Css",
      icon: "/images/11.png",
      desc: "Skilled in creating fast and responsive designs using Tailwind CSS.",
    },
    {
      name: "TypeScript",
      icon: "/images/14.png",
      desc: "Proficient in using TypeScript to build scalable React applications with strong type safety.",
    },
    {
      name: "Problem Solving",
      icon: "/images/13.png",
      desc: "Strong problem-solving and algorithmic thinking skills.",
    },
    {
      name: "Next Js",
      icon: "/images/10.png",
      desc: "Skilled in developing fast, SEO-friendly, and server-side rendered web applications using Next.js.",
    },
    {
      name: "Material UI",
      icon: "/images/12.png",
      desc: "Skilled in building modern, responsive, and professional user interfaces efficiently using Material UI.",
    },
  ];

  return (
    <>
      {/* ===== عنوان Skills مع حركة ارتداد من الأعلى ===== */}
      <motion.h1
        id="skills"
        className="myskills"
        initial={{ y: -100, rotateX: 90, rotateY: 20, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 5,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        My{" "}
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Skills
        </motion.span>
      </motion.h1>

      {/* ===== Swiper للكروت ===== */}
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="skillsSwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="skill-card">
              <div className="card-number">{String(index + 1).padStart(2)}</div>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      <div className="buttons-container">
        <button className="custom-prev">❮</button>
        <button className="custom-next">❯</button>
      </div>
    </>
  );
};

export default Skills;
