import Consoles from "./components/consoles/Consoles";
import ConsoleDetail from "./components/consoleDetail/ConsoleDetail";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function App() {


  const location =  useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait"  />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/consoles/:id" element={<ConsoleDetail/>} />
      </Routes>
    </Layout>
  );
}

export default App;
