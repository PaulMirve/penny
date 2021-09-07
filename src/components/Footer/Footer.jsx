import React from 'react';
import logo_white from '../../img/svg/logo-white.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_main">
                <p>
                    The code of this page can be found in the next <a href="https://github.com/PaulMirve/penny">link</a>
                </p>
                <p>Paul Miranda</p>
            </div>
            <img src={logo_white} alt="Logo" className="footer__logo" />
        </footer>
    )
}
