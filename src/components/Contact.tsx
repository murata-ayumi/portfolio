import './styles/contact.css';
import { FaInstagram } from 'react-icons/fa';
import shibaImage from '../assets/shiba.jpg';
import instaImage from '../assets/murata.design_qr.png';
import Modal from 'react-modal';
import { useState } from 'react';
import Finally from './Finally';
import { motion } from 'framer-motion';
import { fadeIn } from './variants/fadeIn';
import { Scale } from './variants/scale.tsx';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    width: '25%',
    height: 'auto',
    marginTop: 'clamp(6.125rem, 5.25rem + 4.67vw, 8.75rem)',
    padding: '10px',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'fixed',
    backgroundColor: 'var(--secondary-color)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <section id="contact">
        <motion.h2
          variants={fadeIn('left', 1, 'spring', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="contact-title"
        >
          contact
        </motion.h2>
        <div className="contact-container">
          <motion.div
            variants={fadeIn('left', 1, 'spring', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="insta-area"
          >
            <div className="insta-area-inner">
              <p>
                ご連絡は<i>Instagram</i>へ
              </p>
              <a href="https://www.instagram.com/murata.design/">
                <FaInstagram className="insta-icon" />
                <h3 className="insta-url">
                  https://www.instagram.com/murata.design/
                </h3>
              </a>
            </div>
            <div className="modal-area">
              <p>
                <i>Instagram</i>のQRはこちら
              </p>
              <button className="open-btn" onClick={openModal}>
                open
              </button>

              {isOpen && (
                <Modal
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  style={{
                    overlay: customStyles.overlay,
                    content: {
                      ...customStyles.content,
                      position: 'absolute' as const,
                    },
                  }}
                  className="ReactModal__Content"
                >
                  <div>
                    <img
                      src={instaImage}
                      alt="My-insta-qr"
                      className="my-insta-qr"
                    />

                    <button className="close-btn" onClick={closeModal}>
                      close
                    </button>
                  </div>
                </Modal>
              )}
            </div>
          </motion.div>
          <motion.img
            variants={Scale('spring', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
            src={shibaImage}
            alt="shiba-image"
            className="shiba-image"
          />
        </div>
        <Finally />
      </section>
    </>
  );
};
export default Contact;
