import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
//import Logo from "./Logo";
import NavItem from "./NavItem";
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Navbar = () => {
  const cookie = cookies.get('token')
  const [cookieState, setCookieState] = useState(false)

  useEffect(() => {
    if (cookie) {
        setCookieState(true)
    }
    else {
        setCookieState(false)
    }
}, [cookie])
  
  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "News", href: "/client/news" },
    { text: "Q&A", href: cookieState  ? '/admin/qa': '/client/qa' },
    { text: cookieState ? 'Message' : null ,  href: cookieState ? "/admin/message" : '/' },
    { text: cookieState ? 'Logout' : 'Admin login' ,  href: cookieState ? "/Logout" : '/loginAdmin' }
  ];
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">CryptoBot</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;