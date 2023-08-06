// import "./ConsoleDetails.css";
// import { Link, useParams } from "react-router-dom";
// //import games from "../../data/db.json";
// import { useEffect, useState } from "react";
// import Modal from "../modal/Modal";
// import { motion } from "framer-motion";

// const ConsoleDetail = () => {
//   const { id } = useParams();
//   //console.log(id);

//   const [datax, setDatax] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal((prevState) => !prevState);
//   };

//   //DUMMYDATA:
//   // const gamesR = [
//   //   {
//   //     title: "Metal Gear Solid",
//   //     image: "/assets/vmgs.jpeg",
//   //     id: "c1",
//   //   },
//   //   {
//   //     title: "Sons of Liberty",
//   //     image: "/assets/vmgs2.jpeg",
//   //     id: "c2",
//   //   },

//   //   {
//   //     title: "Guns of the Patriots",
//   //     image: "/assets/vmgs4.jpg",
//   //     id: "c3",
//   //   },

//   //   {
//   //     title: "Phantom Pain",
//   //     image: "/assets/vmgs5.jpeg",
//   //     id: "c4",
//   //   },
//   // ];

//   // const c = gamesR.find((game) => game.id === id);
//   // console.log(c);

//   //WORKING WITH import games from "../../data/db.json";:
//   // const gamex = games.games;
//   // console.log(gamex)
//   // const gamex = games.games;
//   // const lists = gamex.find((game) => game.id === id);
//   // console.log(lists);

//   //Using Promise:
//   // useEffect(()=>{
//   //   fetch("http://localhost:8000/games/" + id)
//   //   .then((response) => {
//   //     if (!response.ok) {
//   //       throw Error("Could not fetch data");
//   //     }
//   //     return response.json();
//   //   })
//   //   .then((data) => {
//   //     console.log(data);
//   //     setDatax(data)
//   //     //console.log(datax)
//   //   });
//   // },[])

//   useEffect(() => {
//     fetchGame();
//   }, []);

//   let clearTimer;
//   const timeInterval = 3000;

//   useEffect(() => {
//     if (showModal) {
//       clearTimer = setTimeout(function () {
//         setShowModal(false);
//       }, timeInterval);
//     }
//     return () => {
//       clearTimeout(clearTimer);
//     };
//   }, [showModal]);

//   const fetchGame = async () => {
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:8000/games/" + id);
//       const data = await response.json();

//       if (!response.ok) {
//         throw Error("Something went wrong" || data.message);
//       }
//       setDatax(data);
//       console.log(datax);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };

//   console.log(datax);

//   if (datax.length === 0) {
//     return <p>Loading...</p>;
//   }
//   const content = datax.items.map((list) => {
//     return (
//       <li key={list.title} onClick={toggleModal}>
//         <img
//           src={list.image}
//           alt={list.title}
//           width={"150px"}
//           height={"150px"}
//         />
//         <p>{list.title}</p>
//       </li>
//     );
//   });

//   return (
//     <motion.div
//     className="container"
//     initial={{x:-500}}
//     animate={{x:0,transition:{duration:3, ease:"easeInOut", type:"spring",stiffness:100}}}
//     exit={{y:"100vh",transition:{duration:3,type:"spring",stiffness:"100"}}}
//     >
//       <div>
//         {showModal && <Modal />}
//         <div>
//           <button>
//             {" "}
//             <Link to={"/consoles"}>&larr;</Link>{" "}
//           </button>
//           <h1>Games {id}</h1>
//           <ul className="ul">{content}</ul>
//         </div>
//         <motion.div
//         className="button"
//         initial={{x:"-100vw"}}
//         animate={{x:0,transition:{delay:1}}}
//         >
//           <button>I Do Nuttin</button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default ConsoleDetail;

//OR TO DO IT WITH STAGGERCHILDREN:
import "./ConsoleDetails.css";
import { Link, useParams } from "react-router-dom";
//import games from "../../data/db.json";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2, delayChildren: 2, staggerChildren: 0.3 },
  },
};
const ulVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const ConsoleDetail = () => {
  const { id } = useParams();
  //console.log(id);

  const [datax, setDatax] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  //DUMMYDATA:
  // const gamesR = [
  //   {
  //     title: "Metal Gear Solid",
  //     image: "/assets/vmgs.jpeg",
  //     id: "c1",
  //   },
  //   {
  //     title: "Sons of Liberty",
  //     image: "/assets/vmgs2.jpeg",
  //     id: "c2",
  //   },

  //   {
  //     title: "Guns of the Patriots",
  //     image: "/assets/vmgs4.jpg",
  //     id: "c3",
  //   },

  //   {
  //     title: "Phantom Pain",
  //     image: "/assets/vmgs5.jpeg",
  //     id: "c4",
  //   },
  // ];

  // const c = gamesR.find((game) => game.id === id);
  // console.log(c);

  //WORKING WITH import games from "../../data/db.json";:
  // const gamex = games.games;
  // console.log(gamex)
  // const gamex = games.games;
  // const lists = gamex.find((game) => game.id === id);
  // console.log(lists);

  //Using Promise:
  // useEffect(()=>{
  //   fetch("http://localhost:8000/games/" + id)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error("Could not fetch data");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setDatax(data)
  //     //console.log(datax)
  //   });
  // },[])

  useEffect(() => {
    fetchGame();
  }, []);

  let clearTimer;
  const timeInterval = 3000;

  useEffect(() => {
    if (showModal) {
      clearTimer = setTimeout(function () {
        setShowModal(false);
      }, timeInterval);
    }
    return () => {
      clearTimeout(clearTimer);
    };
  }, [showModal]);

  const fetchGame = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/games/" + id);
      const data = await response.json();

      if (!response.ok) {
        throw Error("Something went wrong" || data.message);
      }
      setDatax(data);
      console.log(datax);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  console.log(datax);

  if (datax.length === 0) {
    return <p>Loading...</p>;
  }
  const content = datax.items.map((list) => {
    return (
      <motion.li variants={ulVariants} key={list.title} onClick={toggleModal}>
        <img
          src={list.image}
          alt={list.title}
          width={"150px"}
          height={"150px"}
        />
        <p>{list.title}</p>
      </motion.li>
    );
  });

  return (
    <div className="container">
      <div>
        {showModal && <Modal />}
        <div>
          <button>
            {" "}
            <Link to={"/consoles"}>&larr;</Link>{" "}
          </button>
          <h1>Games {id}</h1>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <ul className="ul">{content}</ul>
        </motion.div>
        <motion.div
          className="button"
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { delay: 1 } }}>
          <button>I Do Nuttin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsoleDetail;
