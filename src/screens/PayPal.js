import React from "react";
import pay1 from "../Guide/paypal/pay1.png";
import pay2 from "../Guide/paypal/pay2.png";
import pay3 from "../Guide/paypal/pay3.png";
import pay4 from "../Guide/paypal/pay4.png";

function PayPal() {
  return (
    <div>
      <h2> PayPal</h2>
      <p>Setting up PayPal Live API</p>
      <div className="content">
        <div className="content-list">
          <label>Step 1:</label>
          <span className="text-info">
            Go to{" "}
            <a
              href="https://developer.paypal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.paypal.com/
            </a>
          </span>
        </div>
        <div className="content-list">
          <label>Step 2:</label>
          <span className="text-info">
            Click on <strong>"Log in to Dashboard"</strong> (PayPal Business
            account is required)
          </span>
          <img src={pay1} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 3:</label>
          <span className="text-info">
            Switch from <strong>"Sandbox"</strong> to <strong>"Live"</strong>{" "}
            and click <strong>"Create App"</strong>
          </span>
          <img src={pay2} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 4:</label>
          <span className="text-info">
            Enter your <strong>"App Name"</strong>
            and click <strong>"Create App"</strong>
          </span>
          <img src={pay3} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 5:</label>
          <span className="text-info">
            copy and save your <strong>"Client ID"</strong>
          </span>
          <img src={pay4} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 6:</label>
          <span className="text-info">
            Paste copied PAYPAL_CLIENT_ID from <strong>Step 5</strong> as your
          </span>
          <br /> <strong className="color">To:</strong> <br />
          <strong className="color">
            PAYPAL_CLIENT_ID=AadRZKtLc1PBBkXOGqb8-Myuc_uX6mr7e9emK8ddFiHZ1xbtnvpC1Uk1Ud8x0glngnKkL8buiHBGFiyK
          </strong>
        </div>
      </div>
    </div>
  );
}

export default PayPal;
