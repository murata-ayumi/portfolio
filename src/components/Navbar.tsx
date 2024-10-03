import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './styles/navBar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef<HTMLUListElement | null>(null);
  const scrollY = useRef(0); // スクロール位置を保存するための参照

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const targetElement = menuRef.current;

    if (isOpen && targetElement) {
      scrollY.current = window.scrollY; // 現在のスクロール位置を保存
      disableBodyScroll(targetElement);
      document.body.classList.add('no-scroll'); // スクロールを無効にする
      document.body.style.top = `-${scrollY.current}px`; // スクロール位置を固定
    } else if (targetElement) {
      enableBodyScroll(targetElement);
      document.body.classList.remove('no-scroll'); // スクロールを有効にする
      window.scrollTo(0, scrollY.current); // 保存した位置に戻す
      document.body.style.top = ''; // スタイルをリセット
    }

    return () => {
      if (targetElement) {
        enableBodyScroll(targetElement);
      }
      document.body.classList.remove('no-scroll'); // アンマウント時にスクロールを有効にする
      document.body.style.top = ''; // スタイルをリセット
    };
  }, [isOpen]);
  return (
    <motion.nav
      variants={fadeIn('down', 0.9, 'spring', 1.5, 0.6)}
      initial="hidden"
      animate="show"
      className="navbar"
    >
      <a href="/">
        <img src="/logo.png" alt="logo" className="logo" />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <li className="close-icon" onClick={closeMenu}>
          ×
        </li>
        <li>
          <a href="/" onClick={closeMenu}>
            Top
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
