import React, { useState, useEffect } from 'react';
import './to-upside-btn.css';

const ToUpsideBtn: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const scrollThreshold = 400;

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button 
      className={`upside-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-caret-up"></i>
    </button>
  );
};

export default ToUpsideBtn;
