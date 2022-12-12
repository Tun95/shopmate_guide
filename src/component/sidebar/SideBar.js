import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="side-bar-box">
        <ul>
          <Link to="/">
            {" "}
            <li className="side-bar-head">BACKEND API SETUP</li>
          </Link>
          <div className="side-bar-list">
            <Link to="/mongodb">
              {" "}
              <li className="side-body">MongoDb</li>
            </Link>
            <Link to="/paypal">
              <li className="side-body">PayPal</li>
            </Link>
            <Link to="/cloundinary">
              {" "}
              <li className="side-body">Cloundinary</li>
            </Link>
            <Link to="/send">
              <li className="side-body">Send In Blue</li>
            </Link>
            <Link to="/mail">
              {" "}
              <li className="side-body">Mail Setup</li>
            </Link>
          </div>
          <Link to="/frontend">
            {" "}
            <li className="side-bar-head frontend">FRONTEND SETUP</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
