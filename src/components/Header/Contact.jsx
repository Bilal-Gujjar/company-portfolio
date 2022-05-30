
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
function Contact(){
    return (
      <div className="contact">
        <a href="mailto:adim@consultant.com">
          <AiFillMail />
          <span>adim@consultant.com</span>
        </a>

        <a href="tel:+1(600) 123-0000">
          <AiFillPhone />
          <span>+1(600)123-0000</span>
        </a>
      </div>
    );
  }


export default Contact;
