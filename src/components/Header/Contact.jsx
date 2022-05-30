
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
function Contact(){
    return (
      <div className="contact">
        <a href="mailto:fullstackadim@consultant.com">
          <AiFillMail />
          <span>fullstackadim@consultant.com</span>
        </a>

        <a href="tel:+1(619) 637-7585">
          <AiFillPhone />
          <span>+1(619)637-7585</span>
        </a>
      </div>
    );
  }


export default Contact;
