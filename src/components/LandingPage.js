import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
function LandingPage() {
  const newtab = "_blank";
  return (
    <div className="container--landingPage">
      <div className="left--landing">
        <figure>
          <img
            className="svg--event"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T201906Z&X-Amz-Expires=86400&X-Amz-Signature=541b4de8ddfdacebbabb94362c1beff9d75f0c3768c3448d6116122f72f36c4d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            alt="svg--img"
          />
        </figure>
        <button className="ipad-pro">🎉 Create my event</button>
      </div>
      <div className="right--landing">
        <div className="highlight--heading">
          <p className="highlight--heading-title">Imagine if</p>
          <p className="highlight--heading-title heading-title-customColor">Snapchat</p>
          <p className="highlight--heading-title">had events.</p>
        </div>
        <div className="deatils--about">
          <p className="deatils--about--description">
            Easily host and share events with your friends
          </p>
          <p className="deatils--about--description">across any social media</p>
        </div>
        <div className="create--event">
          <Link to="createEvent" target={newtab}>
            <button className="mac-book">🎉 Create my event</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
