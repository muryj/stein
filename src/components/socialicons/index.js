import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";
import {
    RiTwitterXFill
} from "react-icons/ri"

import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
          {socialprofils.instagram && (
              <li>
                  <a href={socialprofils.instagram}>
                      <FaInstagram/>
                  </a>
              </li>
          )}
          {socialprofils.linkedin && (
              <li>
                  <a href={socialprofils.linkedin}>
                      <FaLinkedin />
                  </a>
              </li>
          )}
          {socialprofils.facebook && (
              <li>
                  <a href={socialprofils.facebook}>
                      <FaFacebookF />
                  </a>
              </li>
          )}
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <RiTwitterXFill />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
