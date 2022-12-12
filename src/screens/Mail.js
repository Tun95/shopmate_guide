import React from "react";
import gm1 from "../Guide/gmail/gm1.png";
import gm2 from "../Guide/gmail/gm2.png";
import gm3 from "../Guide/gmail/gm3.png";
import gm4 from "../Guide/gmail/gm4.png";

function Mail() {
  return (
    <div>
      <h2> Gmail</h2>
      <p>Setting up GMAIL PASS</p>
      <div className="content">
        <div className="content-list">
          <label>Step 1:</label>
          <span className="text-info">
            Go to{" "}
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mail.google.com/
            </a>
          </span>
          <span className="text-info">
            Click on <strong>"Manage Your Google Account"</strong>
          </span>
        </div>
        <div className="content-list">
          <label>Step 2:</label>
          <span className="text-info">
            Select <strong>"Security"</strong> and click on{" "}
            <strong>"App Password"</strong>
          </span>
          <img src={gm1} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 3:</label>
          <span className="text-info">
            Select <strong>"Other(Custom name)"</strong> from the list and click{" "}
            <strong>"Generate"</strong>
          </span>
          <img src={gm2} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 4:</label>
          <span className="text-info">
            Enter <strong>"nodemailer"</strong>
            and click <strong>"Generate"</strong>
          </span>
          <img src={gm3} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 5:</label>
          <span className="text-info">
            copy the generated <strong>"Password"</strong>
          </span>
          <img src={gm4} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 6:</label>
          <span className="text-info">
            Paste copied <strong>"Password"</strong> from{" "}
            <strong>Step 5</strong> as your
          </span>
          <br /> <strong className="color">To:</strong> <br />
          <strong className="color">GMAIL_PASS=(paste here)</strong>
        </div>
      </div>
    </div>
  );
}

export default Mail;
