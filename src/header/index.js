import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          {/*Commented out for future*/}
          {/*<Themetoggle />*/}
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>

          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">HOME</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/projects" className="my-3">PROJECTS</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/cv" className="my-3">CV</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/relatedprojects" className="my-3">+related projects</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/publications" className="my-3"> PUBLICATIONS</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3">CONTACTS</Link>
                  </li>
                </ul>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div>
              <p className="copyright m-0 copyright-text">For my talented friend Olga</p>
              <p className="copyright m-0 copyright-text">engineered by: Yevhenii Muryi</p>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Headermain;
