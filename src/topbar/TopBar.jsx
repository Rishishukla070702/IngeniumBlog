import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import "./topbar.css";

export default function TopBar() {
  const user = false;

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className='topCenter'>
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <ScrollLink
              className="link"
              to="about"
              smooth={true}
              duration={500}
            >
              ABOUT
            </ScrollLink>
          </li>
          <li className="topListItem">
            <Link className="link" to="/favourites">
              FAVOURITES
            </Link>
          </li>
          <li className="topListItem">
            <ScrollLink
              className="link"
              to="contact"
              smooth={true}
              duration={500}
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

