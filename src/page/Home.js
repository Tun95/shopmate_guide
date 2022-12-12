import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../component/navbar/NavBar";
import SideBar from "../component/sidebar/SideBar";
import "../../src/styles.css";
import HomeScreen from "../screens/HomeScreen";
import MongoDb from "../screens/MongoDb";
import PayPal from "../screens/PayPal";
import Cloudinary from "../screens/Cloudinary";
import Send from "../screens/Send";
import Mail from "../screens/Mail";
import Frontend from "../screens/Frontend";

function Home() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="side-main f_flex">
          <SideBar />
          <div className="main padding">
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/mongodb" element={<MongoDb />}></Route>
              <Route path="/paypal" element={<PayPal />}></Route>
              <Route path="/cloundinary" element={<Cloudinary />}></Route>
              <Route path="/send" element={<Send />}></Route>
              <Route path="/mail" element={<Mail />}></Route>
              <Route path="/frontend" element={<Frontend />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
