import React from "react";
import send1 from "../Guide/send_in_blue/send1.png";
import send2 from "../Guide/send_in_blue/send2.png";
import send3 from "../Guide/send_in_blue/send3.png";
import send4 from "../Guide/send_in_blue/send4.png";
import send5 from "../Guide/send_in_blue/send5.png";
import send6 from "../Guide/send_in_blue/send6.png";
import send7 from "../Guide/send_in_blue/send7.png";
import send8 from "../Guide/send_in_blue/send8.png";
import send9 from "../Guide/send_in_blue/send9.png";
import send10 from "../Guide/send_in_blue/send10.png";
import send11 from "../Guide/send_in_blue/send11.png";
import send12 from "../Guide/send_in_blue/send12.png";

function Send() {
  return (
    <div>
      <h2> Send In Blue</h2>
      <p>Setting up Send In Blue account and API</p>
      <div className="content">
        <div className="content-list">
          <label>Step 1:</label>
          <span className="text-info">
            Go to{" "}
            <a
              href="https://www.sendinblue.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.sendinblue.com/
            </a>
          </span>
        </div>
        <div className="content-list">
          <label>Step 2:</label>
          <span className="text-info">
            Click on <strong>"Sign up free"</strong>
          </span>
          <img src={send1} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 3:</label>
          <span className="text-info">
            Sign up with <strong>"Gmail"</strong> or your prefered method
          </span>
          <img src={send2} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 4:</label>
          <span className="text-info">
            fill all boxes and click <strong>"Next"</strong>
          </span>
          <img src={send3} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 5:</label>
          <span className="text-info">
            same as <strong>Step 4</strong>
          </span>
          <img src={send4} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 6:</label>
          <span className="text-info">
            Select anything from the list and click <strong>"Next"</strong>
          </span>
          <img src={send5} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 7:</label>
          <span className="text-info">Enter your phone number to verify</span>
          <img src={send6} alt="" />
        </div>
        <div className="content-list">
          <label>Step 8:</label>
          <span className="text-info">
            <span>Confirm verification code</span>
          </span>
          <img src={send7} alt="" />
        </div>
        <div className="content-list">
          <label>Step 9:</label>
          <span className="text-info">
            choose <strong>"Free Plan"</strong>
          </span>
          <img src={send8} alt="" />
        </div>
        <div className="content-list">
          <label>Step 10:</label>
          <span className="text-info">
            click <strong>"Create a new campaign"</strong>
          </span>
          <img src={send9} alt="" />
        </div>
        <div className="content-list">
          <label>Step 11:</label>
          <span className="text-info">
            Enter <strong>"campaign name"</strong>
          </span>
          <img src={send10} alt="" />
        </div>
        <div className="content-list">
          <label>Step 12:</label>
          <span className="text-info">
            click <strong>"Save & Quit"</strong>
          </span>
          <img src={send11} alt="" />
        </div>
        <div className="content-list">
          <label>Step 13:</label>
          <span className="text-info">
            Select <strong>"Transactional</strong> from the nav bar and copy
            paste your API KEY somewhere for next step
            <img src={send12} alt="" />
          </span>
        </div>
        <div className="content-list">
          <label>Step 14:</label>
          <span className="text-info">
            Paste copied API'S from <strong>Step 13</strong>
          </span>
          <br /> <strong className="color">As:</strong> <br />
          <strong className="color">
            SEND_IN_BLUE_API_KEY=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
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Send;
