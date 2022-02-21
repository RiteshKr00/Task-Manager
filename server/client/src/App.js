import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NewTask from "./Components/pages/NewTask";
import InprogressTask from "./Components/pages/InprogressTask";
import CompletedTask from "./Components/pages/CompletedTask";
import ArchivedTask from "./Components/pages/ArchivedTask";
import NavBar from "./Components/pages/Navbar";
import Home from "./Components/pages/Home";

function App() {
  return (
    <div className="h-screen  py-2  bg-gray-900">
      <NavBar />
      <h1 className="pt-5 text-green-500 bold text-xl text-center">
        Task Manager App
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTask />} />
        <Route path="/inprogress" element={<InprogressTask />} />{" "}
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/archive" element={<ArchivedTask />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
