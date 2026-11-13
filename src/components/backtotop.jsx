import React, { useEffect } from 'react';

function BackToTop() {
  useEffect(() => {
    const btnBackToTop = document.getElementById('btn-back-to-top');

    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = 'block';
      } else {
        btnBackToTop.style.display = 'none';
      }
    });

    btnBackToTop.addEventListener('click', () => {
      document.body.scrollTop = 0; // Untuk Safari
      document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
    });
  }, []);

  return (
    <button type="button" className="btn btn btn-floating btn-lg" id="btn-back-to-top">
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default BackToTop;
