
import Logo from "./Logo";
import Links from "./Links";
import Quote from "./Quote";
import Search from "./Search";
import "./style.css";
function Nav () {
    return (
      <nav>
        <div className="container container__nav">
          <Logo />
          <Links />
          <Quote />
        </div>
      </nav>
    );
  }

export default Nav;