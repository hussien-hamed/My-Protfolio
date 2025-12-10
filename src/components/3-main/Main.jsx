import { useState } from "react";
import "./main.css";
import { myProjects } from "./project";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <>
      <h2 id="myproject" className="myproject">
        My <span>Projects</span>
      </h2>

      <main className="flex">
        <section className="flex  left-section">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            all projects
          </button>

          <button
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>

          <button
            onClick={() => {
              handleClick("javascript");
            }}
            className={currentActive === "javascript" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React Js
          </button>

          <button
            onClick={() => {
              handleClick("typescript");
            }}
            className={currentActive === "typescript" ? "active" : null}
          >
            React & Typescript
          </button>
          {/* <button
            onClick={() => {
              handleClick("node");
            }}
            className={currentActive === "node" ? "active" : null}
          >
            Node & Express
          </button> */}
        </section>

        <section className=" flex right-section">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.imgPath}
                  className="card"
                >
                  <img width={266} src={item.imgPath} alt="" />

                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing .
                      Ex tempore dolor
                    </p>

                    <div className="flex icons">
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                      ></a>
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-github"
                      ></a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
};

export default Main;
