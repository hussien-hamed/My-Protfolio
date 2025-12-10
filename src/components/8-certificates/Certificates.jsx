import "./Certificates.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Recommendation Letter – Front-End Developer",
      center: "Darrbeni Academy – Homs, Syria",
      date: "2023",
      logo: "/images/16.jpg",
      image: "/images/darbni.jpg",
    },
  ];

  return (
    <section className="certificates-section" id="Certificates">
      <div className="containerr">
        {/* ===== العنوان مع حركة ارتداد سلسة ===== */}
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0, scale: 0.8 }} // يبدأ صغيرًا ومتحرك قليلًا للأعلى
          whileInView={{ y: 0, opacity: 1, scale: 1 }} // يتحرك للأسفل ويكبر تدريجيًا
          transition={{ duration: 1.2, ease: "easeOut" }} // تكبير سلس وبطيء
          viewport={{ once: true, amount: 0.3 }} // يبدأ التحريك عند ظهور 30% من العنصر
        >
          My <span>Certificates & Recommendations</span>
        </motion.h2>

        {/* ===== شبكة البطاقات ===== */}
        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="image-container">
                <img src={cert.logo} className="thumbnail-image" />
              </div>

              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.center}</p>
                <span>{cert.date}</span>

                <div className="buttons-container">
                  <motion.a
                    href={cert.image}
                    download
                    className="download-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download
                  </motion.a>
                  <motion.button
                    className="view-btn"
                    onClick={() => setSelectedImage(cert.image)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Modal لعرض الصورة كاملة مع Motion سلس ===== */}
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              <img src={selectedImage} alt="Certificate Full View" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
