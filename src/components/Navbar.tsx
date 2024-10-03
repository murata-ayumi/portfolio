import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';
import './styles/navBar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // メニューを開閉する関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // メニューを閉じる関数
  const closeMenu = () => {
    setIsOpen(false);
  };

  // メニューの状態に応じてbodyにno-scrollクラスを追加・削除
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // クリーンアップ
    return () => {
      document.body.classList.remove('no-scroll');
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

      {/* メニューアイコン */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* ナビゲーションメニュー */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {/* × ボタンをメニュー内に表示 */}
        <li className="close-icon" onClick={toggleMenu}>
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
