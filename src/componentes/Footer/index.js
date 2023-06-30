import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <h3 className="footer__title">¡Gracias por visitarnos!</h3>
                <p className="footer__text">Nos encantaría seguir en contacto:</p>
                <div className="footer__social-icons">
                    <a href="#" className="footer__icon">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                    <a href="#" className="footer__icon">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="#" className="footer__icon">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                </div>
            </div>
            <p className="footer__copy">&copy; 2023 MiSitioWeb. Todos los derechos reservados.</p>
        </footer>
    );
};