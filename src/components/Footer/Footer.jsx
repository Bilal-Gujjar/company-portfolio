import logo from '../Nav/logo.svg'
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
function Footer() {
  return (
    <footer id="contact" className="container footer__container">
      <div className="about">
        <h3><img src={logo} style={{ width: "250px", height: "250px" }} /></h3>
        <p className="text">
          We are a team of experienced and passionate IT professionals.
           We are committed to providing the best IT solutions to our clients.
            Our team of professionals are highly skilled in the field of IT 
            and have a wide range of experience in the field of IT.
        </p>
        <ul className="footer__socials">
          <li>
            <a href="#">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <CgInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
      <div className="services">
        <h3>Services</h3>
        <ul>
          <li>

            <a href="#" className="text">
              Web Application
            </a>
          </li>
          <li>
            <a href="#" className="text">
              DevOps
            </a>
          </li>
          <li>
            <a href="#" className="text">
              Big Data And Consultiation
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <address className="text">
              Office: We are remote, but we are here to help you.
            </address>
          </li>
          <li>
            <a href="tel:+1(619) 637-7585" className="text">
              Tel : +1(619) 637-7585
            </a>
          </li>
          <li>
            <a href="mailto:fullstackadim@consultant.com" className="text">
              Email: fullstackadim@consultant.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer;
