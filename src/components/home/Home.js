import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//VARIANTS START HERE:
const container = {
   hidden: { y: -600 },
  visible: {
    y: 0,
    transition: {
      delay: 1,
      delayChildren: 1.7,

      type: "spring",
      stiffness: 100,
    },
  },
  //exit:{x:"-100vw",transition:{ease:"easeInOut",type:"spring",stiffness:100}}
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const sentence = {
  hidden: { opacity: 1 },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: "easeInOut",
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};



// AND VARIANTS END HERE//
const Home = () => {
  const line1 = "Gaming is my hobby.";
  const line2 = "Coding is my life.";

  return (
    <motion.div
      className="home"
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 1, duration: 2, ease: "easeInOut" },
      // }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h1>Welcome to iPlayStation</h1>

      <motion.h3 className="slogan-sentence" variants={sentence}>
        {line1.split("").map((character, index) => {
          return (
            <motion.span key={index} variants={letter}>
              {character}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((character, index) => {
          return (
            <motion.span key={index} variants={letter}>
              {character}
            </motion.span>
          );
        })}
      </motion.h3>
      <div className="button">
        <motion.button
          whileHover={{
            backgroundColor: "black",
            scale: 1.5,
            transition: { repeat: Infinity },
          }}>
          
          <Link to={"/consoles"}>Click Here to Start</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;
