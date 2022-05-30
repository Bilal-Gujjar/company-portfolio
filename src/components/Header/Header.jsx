
import Contact from "./Contact";
import Socials from "./Socials";
import "./style.css";
function Header (){
    return (
      <header>
        <div className="container container__header">
          <Contact />
          <Socials />
        </div>
      </header>
    );
  }


export default Header;
