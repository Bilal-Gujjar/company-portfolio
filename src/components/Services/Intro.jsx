import { Component } from "react";
import { BiBrain } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel" >
          <div className="services__intro__image">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>Our Speciality in building Full STACK solutions.</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>Our Speciality in building Full STACK solutions.</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>We are the solutions for IT problems</h1>
            <p className="text">
              Our are currently dealing with the most challenging IT problems by using 
              the latest technologies and tools.We are committed to providing the best IT solutions to our clients.
              We deals HTML CSS JavaScript REACT NODE.JS. We are highly skilled in the field of IT and have a wide range of experience in the field of IT.

            </p>
            {/* <button className="btn btn-primary">More About</button> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
