import "./Header.css";
import { motion,} from "framer-motion";

const svgVariants = {
  hidden:{
    rotate:360,
  },
  visible:{
    rotate:0,
    transition:{duration:5,repeat:Infinity,repeatType:"mirror"},
  },
  
}




const Header = () => {
  return (
    <div className="header">
      <div>
        <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate="visible"
  
          xmlns="http://www.w3.org/2000/svg"
          height="3rem"
          viewBox="0 0 448 512">
          <motion.path 
            
          d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V381c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z" />
        </motion.svg>
      </div>

      <motion.h2
        initial={{opacity:0, y:-50}}
        animate={{opacity:1,y:0 ,transition:{delay:6, type:"spring",stiffness:500}}}

      >Hello World</motion.h2>
    </div>
  );
};

export default Header;

