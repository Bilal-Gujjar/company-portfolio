
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
import { useState } from "react/";
 function About(){

  const [percentage, setPercentage] = useState(92);

    return (
      <section className="about__container" >
        <div className="container">
          <div>
            <h1>Advance Innovation For IT Solutions by Solux Technologies</h1>
            <h2 className="text">
              We are a team of experienced and passionate IT professionals.
              We are committed to providing the best IT solutions to our
              clients.
              Our team of professionals are highly skilled in the field of
              IT and have a wide range of experience in the field of IT.
              
            </h2>
            <div className="about__buttons" >
              <button className="btn btn-primary"><a href="mailto:adim@consultant.com">Get In Touch</a></button>
              <a href="#services">
                <span>Our Services</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }} >
            <div className="about__image">
              <img
                src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
                alt="about"
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
              <h4>
                Business Growth
                <br />
                <small>Level is high</small>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default About;
