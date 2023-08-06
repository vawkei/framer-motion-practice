import "./Consoles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//VARIANTS START HERE:

const container = {
  hidden: { x: "-100vw" },

  visible: {
    x: 0,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 100,
      delay: 1,
      delayChildren: 1.7,
    },
  },

  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 3,
      type: "spring",
      stiffness: 100,
    },
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeInOut" },
  },
};
const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: { opacity: 1, y: 0, },
};

// AND VARIANTS END HERE//
const Consoles = () => {
  const consoles = [
    { id: "c1", title: "playStation 1" },
    { id: "c2", title: "playStation 2" },
    { id: "c3", title: "playStation 3" },
    { id: "c4", title: "playStation 4" },
  ];

  const x = consoles.map((c) => {
    return { id: c.id, title: c.title };
  });
  console.log(x);
  const playStation1 = x[0];
  const playStation2 = x[1];
  const playStation3 = x[2];
  const playStation4 = x[3];
  console.log(playStation4);

  return (
    <motion.div
      className="consoles"
      // initial={{ x: "-100vw" }}
      // animate={{
      //   x: 0,
      //   transition: { duration: 3, type: "spring", stiffness: 100,delay: 1,
      //   delayChildren: 1.7, },
      // }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 3,
          type: "spring",
          stiffness: 100,
        },
      }}
      // exit={{x:"-100vw",transition:{ease:"easeInOut"}}}
    >
      <h1>Select your console</h1>

      {/* <ul>
        {consoles.map((console, index) => {
          return (
            <li key={index}>
              {" "}
              <Link to={`/consoles/${console.id}`}>{console.title}</Link>{" "}
            </li>
          );
        })}
      </ul> */}

      <motion.ul variants={sentence}>
        {playStation1.title.split("").map((ps,index) => {
          return (
            <motion.span key={index} variants={letter}>
              <Link to={`/consoles/${playStation1.id}`}> {ps} </Link>
            </motion.span>
          );
        })}
        <br />
        {playStation2.title.split("").map((ps,index) => {
          return (
            <motion.span key={index} variants={letter}>
              <Link to={`/consoles/${playStation2.id}`}> {ps} </Link>
            </motion.span>
          );
        })}
        <br />
        {playStation3.title.split("").map((ps,index) => {
          return (
            <motion.span key={index} variants={letter}>
              <Link to={`/consoles/${playStation3.id}`}> {ps} </Link>
            </motion.span>
          );
        })}
        <br />
        {playStation4.title.split("").map((ps,index) => {
          return (
            <motion.span key={index} variants={letter}>
              <Link to={`/consoles/${playStation4.id}`}> {ps} </Link>
            </motion.span>
          );
        })}
        <br />
      </motion.ul>
      <motion.div
        className="button"
        initial={{ x: "-100vw" }}
        animate={{ x: 0, transition: { delay: 1 } }}>
        <button>
          <Link to={"/"}>Back</Link>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Consoles;
