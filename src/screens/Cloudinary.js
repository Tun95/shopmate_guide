import React from "react";
import cloud1 from "../Guide/cloudinary/cloud1.png";
import cloud2 from "../Guide/cloudinary/cloud2.png";
import cloud3 from "../Guide/cloudinary/cloud3.png";
import cloud4 from "../Guide/cloudinary/cloud4.png";
import cloud5 from "../Guide/cloudinary/cloud5.png";

function Cloudinary() {
  return (
    <div>
      <h2> Cloudinary</h2>
      <p>Setting up Cloudinary API</p>
      <div className="content">
        <div className="content-list">
          <label>Step 1:</label>
          <span className="text-info">
            Go to{" "}
            <a
              href="https://cloudinary.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cloudinary.com/
            </a>
          </span>
        </div>
        <div className="content-list">
          <label>Step 2:</label>
          <span className="text-info">
            Click on <strong>"SIGN UP FOR FREE"</strong>
          </span>
          <img src={cloud1} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 3:</label>
          <span className="text-info">Sign up with your prefered method</span>
          <img src={cloud2} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 4:</label>
          <span className="text-info">
            Select <strong>"Developer"</strong>
            and click <strong>"Continue"</strong>
          </span>
          <img src={cloud3} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 5:</label>
          <span className="text-info">
            Select <strong>"Build a new website"</strong>
            and click <strong>"Done"</strong>
          </span>
          <img src={cloud4} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 6:</label>
          <span className="text-info">
            Select<strong>"Dashboard"</strong> and copy each api and save
            somewhere for the next step
          </span>
          <img src={cloud5} alt="" />
        </div>{" "}
        <div className="content-list">
          <label>Step 7:</label>
          <span className="text-info">
            Paste copied API'S from <strong>Step 6</strong> as your
          </span>
          <br /> <strong className="color">As:</strong> <br />
          <strong className="color">
            CLOUDINARY_CLOUD_NAME=dbdorop0y
            <br />
            CLOUDINARY_API_KEY=926984187527312
            <br />
            CLOUDINARY_URL=cloudinary://926984187527312:nqlTb9wjfq5rq8epJhUBNwabXRA@dbdorop0y
            <br />
            CLOUDINARY_API_SECRET=nqlTb9wjfq5rq8epJhUBNwabXRA{" "}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Cloudinary;
