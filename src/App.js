import Consoles from "./components/consoles/Consoles";
import ConsoleDetail from "./components/consoleDetail/ConsoleDetail";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Layout>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/consoles/:id" element={<ConsoleDetail/>} />
      </Routes>
    </Layout>
  );
}

export default App;
