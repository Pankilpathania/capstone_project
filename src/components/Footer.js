
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { Link } from 'react-router-dom';
  import './Footer.css';
  import logoImage from '../assests/images/logo-white.png';
  import { contacts, socials, navLinks } from '../constants/constant';

export default function Footer() {

    return (
        <footer className="site-footer">
          <div className="container grid">
            <img
              className="site-footer-logo"
              src={logoImage}
              alt="Little Lemon"
            />
            <nav className="site-footer-nav">
              <h4>Sitemap</h4>
              <ul>
                {navLinks.map((navLink, index) => 
                  <li key={index}>
                    <Link to={navLink.path}>{navLink.name}</Link>
                  </li>
                )}
              </ul>
            </nav>
            <div className="site-footer-contact">
              <h4>Contact us</h4>
              <address>
              {contacts.map((contact, index) =>
                <p key={index}>
                  <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                </p>
              )}
              </address>
            </div>
            <div className="site-footer-social">
              <h4>Connect with us</h4>
              {socials.map((social, index) =>
                <a
                  key={index}
                  href={`https://www.${social.name}.com`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              )}
            </div>
          </div>
        </footer>
      );
} ;