import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {MenuOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

// img import
import imgLogo from "../img/img-logo.png";

export default function Header() {
  const location = useLocation();
  const str = location.pathname;
  const pathName = str.substring(1, str.length);

  useEffect(() => {
    console.log(pathName);
  }, [location]);

  const [menuOpen, setMenuOpen] = useState(false);

  const isOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const menus = [
    {
      title: "이웰 소개",
      path: "/About",
      className: "nav-intro" + pathName,
    },
    {
      title: "기술과 가치",
      path: "/Value",
      className: "nav-value" + pathName,
    },
    {
      title: "공지사항",
      path: "/Jobs",
      className: "nav-jobs" + pathName,
    },
    {
      title: "위치",
      path: "/Location",
      className: "nav-locate" + pathName,
    },
  ];

  const width = document.body.clientWidth;

  return (
    <div id="HeaderNav">
      <div className="heaer-wrap">
        <div>
          <Link to="/">
            <img src={imgLogo} alt="logo" />
          </Link>
        </div>
        <div className="nav-wrap desk">
          {menus.map((value) => (
            <Link to={value.path} className={value.className} key={value.title}>
              {value.title}
            </Link>
          ))}
        </div>
        <div className="nav-wrap_m mobile">
          <div onClick={isOpenMenu}>
          <MenuOutlined />
          </div>
          {menuOpen && (
            <div top className="header-menu" onClick={isOpenMenu}>
              <div className="header-menu-container">
                {menus.map((value) => (
                  width < 952 ? (
                    <Fade top delay={50}>
                      <Link to={value.path} className={value.className} key={value.title}>
                        {value.title}
                      </Link>
                    </Fade>
                  ):
                  ( <Link to={value.path} className={value.className} key={value.title}>
                    {value.title}
                  </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
