import React from "react";
import mon1 from "../Guide/mongodb/mon1.png";
import mon2 from "../Guide/mongodb/mon2.png";
import mon3 from "../Guide/mongodb/mon3.png";
import mon4 from "../Guide/mongodb/mon4.png";
import mon5 from "../Guide/mongodb/mon5.png";
import mon6 from "../Guide/mongodb/mon6.png";
import mon7 from "../Guide/mongodb/mon7.png";
import mon8 from "../Guide/mongodb/mon8.png";
import mon9 from "../Guide/mongodb/mon9.png";
import mon10 from "../Guide/mongodb/mon10.png";
import mon11 from "../Guide/mongodb/mon11.png";
import mon12 from "../Guide/mongodb/mon12.png";

function MongoDb() {
  return (
    <div>
      <h2> MongoDb</h2>
      <p>Setting up MongoDb account and URI</p>
      <div className="content">
        <div className="content-list">
          <label>Step 1:</label>
          <span className="text-info">
            Go to{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mongodb.com/
            </a>
          </span>
        </div>
        <div className="content-list">
          <label>Step 2:</label>
          <span className="text-info">
            Click on <strong>"Try Free"</strong>
          </span>
          <img src={mon1} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 3:</label>
          <span className="text-info">
            Sign up with <strong>"Gmail"</strong> or your prefered method
          </span>
          <img src={mon2} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 4:</label>
          <img src={mon3} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 5:</label>
          <span className="text-info">
            from the list select the highlighted list
          </span>
          <img src={mon4} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 6:</label>
          <span className="text-info">
            Choose <strong>"Free"</strong> plan{" "}
          </span>
          <img src={mon5} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 7:</label>
          <span className="text-info">
            Leave all as default settings and click on{" "}
            <strong>"Create Cluster"</strong>
          </span>
          <img src={mon6} alt="" />
        </div>
        <div className="content-list">
          <label>Step 8:</label>
          <span className="text-info">
            <strong>Section 1:</strong>
            <br /> Enter your <strong>username: e.g "shopmate"</strong>
            <br />
            <br />
            <strong>password: e.g "shopmate"</strong>
            <br />
            <span>
              copy and save your <strong>"username"</strong> and{" "}
              <strong>"password"</strong> somewhere
            </span>
            <br />
            <br />
            <span>Then click on </span>
            <strong>"Create User"</strong>
            <br />
            <br />
            <br />
            <strong>Section 2:</strong>
            <br /> For <strong>IP address: "0.0.0.0/0"</strong>
            <br />
            <br />
            <strong>description: e.g "all"</strong>
            <br />
            <br />
            <span>Then click on </span>
            <strong>"Add Entry"</strong>
            <br />
            <br />
            <br />
            <br />
            <span>
              Once that is done click on <strong>"Finish and Close"</strong>
            </span>
          </span>
          <img src={mon7} alt="" />
        </div>
        <div className="content-list">
          <label>Step 9:</label>
          <span className="text-info">
            click on <strong>"Go to Database"</strong>
          </span>
          <img src={mon8} alt="" />
        </div>
        <div className="content-list">
          <label>Step 10:</label>
          <span className="text-info">
            click <strong>"Connect"</strong>
          </span>
          <img src={mon9} alt="" />
        </div>
        <div className="content-list">
          <label>Step 11:</label>
          <span className="text-info">
            select <strong>"MongoDb Drivers"</strong>
          </span>
          <img src={mon10} alt="" />
        </div>
        <div className="content-list">
          <label>Step 12:</label>
          <span className="text-info">
            copy and save somewhere just as instructed and{" "}
            <strong>"Close"</strong>
          </span>
          <img src={mon11} alt="" />
        </div>
        <div className="content-list">
          <label>Step 13:</label>
          <span className="text-info">
            From <strong>Step 8</strong> replace <strong> "password"</strong>and
            your <strong>"username"</strong>
            <br /> <strong>From:</strong> <br />
            <img src={mon12} alt="" />
          </span>
          <br /> <strong className="color">To:</strong> <br />
          <strong className="color">
            MONGODB_URI=
            mongodb+srv://Shopmate:shopmate@cluster0.3b3srsg.mongodb.net/shopmate?retryWrites=true&w=majority
          </strong>
        </div>
      </div>
    </div>
  );
}

export default MongoDb;
