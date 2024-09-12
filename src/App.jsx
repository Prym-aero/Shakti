import "./App.css";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ActiveDrone from "./Page/ActiveDrone";
import AllDrones from "./Page/AllDrones";
import DroneProfile from "./Page/Profile/DroneProfile";
import TermsAndConditions from "./component/TermsAndConditions";
function App() {
  return (
    // <div className="wrapper w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto z-10">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/active" element={<ActiveDrone/>} />
        <Route path="/allDrones" element={<AllDrones/>} />
        <Route path="/profile/:id" element={<DroneProfile/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />


      </Routes>
    // </div>
  );
}

export default App;
