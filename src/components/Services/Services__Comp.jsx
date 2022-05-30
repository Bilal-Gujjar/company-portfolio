import { Component } from "react";
import { GrShieldSecurity,GrCpu,GrDocker,GrBitcoin,GrCompare,GrDatabase } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";





class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp" data-aos="flip-up">
        <div >
          <h1>Our Servcices For Technology You Need</h1>
          {/* <button className="btn btn-primary">Load More</button> */}
        </div>
        <div>
          <div>
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>Web Application</h4>
            <p>We are using the MERN stack for the Medium to large Scale Web Application.</p>
          </div>
          <div>
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Data Science</h4>
            <p>For the Data Science we are using the Python tech stack 
              like Numpy ,Pandas etc.</p>
          </div>
          <div>
            <div className="icon">
              <GrCpu/>
            </div>
            <h4>Big Data</h4>
            <p>We are dealing with dig data.Cleaning Big Data, Extracting usefull inside from big data 
              and Viulazation of the data
            </p>
          </div>
          <div>
            <div className="icon">
              <GrDocker />
            </div>
            <h4>DevOps</h4>
            <p>We completley manage Devops operation and also help to 
              build microservices. </p>
          </div>
          <div>
            <div className="icon">
              <GrCompare />
            </div>
            <h4>IT Consultant</h4>
            <p>We are providing State of the  art Consultant services. </p>
          </div>
          <div>
            <div className="icon">
              <GrBitcoin />
            </div>
            <h4>Blockchain and Web3.0</h4>
            <p>We are dealing with Blockchain and  Web3.0 technologies</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
