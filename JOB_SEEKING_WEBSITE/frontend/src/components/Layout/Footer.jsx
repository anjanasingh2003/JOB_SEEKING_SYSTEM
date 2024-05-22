import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaHackerrank, FaTelegram, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Anjana, Devendra, Sachin.</div>
      <div>
        <Link to={"https://www.hackerrank.com/profile/anjanasingh20033"} target="_blank">
          <FaHackerrank />
        </Link>
        <Link to={"https://web.telegram.org/a/ "} target="_blank">
          <FaTelegram />
        </Link>
        <Link to={"https://www.linkedin.com/feed/ "} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/anjanasingh2003/ "} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;