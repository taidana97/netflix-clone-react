import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  // scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://imgt.taimienphi.vn/cf/Images/huy/2020/3/19/hinh-avatar-cho-nu-dep-1.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
