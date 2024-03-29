import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Akash Raj R</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/akxsh._.18/" target='_blank' className="footer__social-icon" rel='noreferrer'>
                <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/akashrajr/" target='_blank' className="footer__social-icon" rel='noreferrer' >
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/ak18akashrajr" target='_blank' className="footer__social-icon" rel='noreferrer' >
                <i class="ui uil-github-alt"></i>
            </a>
            </div>

            <span className="footer__copy">
                &#169; Akash Raj R. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer