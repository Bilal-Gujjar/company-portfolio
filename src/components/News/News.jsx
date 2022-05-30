import { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import required modules 
import { Pagination } from "swiper";

import HotNews from "./News__Hot";
import LatestNews from "./News__Latest";
import "./style.css";

class News extends Component {
  constructor() {
    super();
    this.hotNews = [
      
      {
        title: "Great Technology Solution",
        avatar:
          "https://www.wallpaperup.com/uploads/wallpapers/2017/12/22/1173395/286d5a20933217acb4066811283dc734-700.jpg",
        text:
        "We are a team of experienced and passionate IT professionals.We are committed to providing the best IT solutions to ourclients.Our team of professionals are highly skilled in the field of IT and have a wide range of experience in the field of IT.",
        author: "Admin",
        role: "Developer"
      }
    ];
    this.lastestNews = [
      {
        img:
          "https://wd.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/yezj4CV8NRdONDSUmpWr.png",
        date: "Today",
        author: "Admin",
        text:
          "When browsers first reached version 10, there were a few issues as the major version number went from one digit to two. Hopefully, we learned a few things that'll ease the transition from two digits to three."
      },
      {
        img:
          "https://blog.logrocket.com/wp-content/uploads/2022/03/client-side-routing-react-location.png",
        date: "Today",
        author: "Admin",
        text:
          "Routing is one of the essential aspects of single-page applications (SPAs), but because React doesn’t come with a routing solution."
      }
    ];
  }
  render() {
    return (
      <section id="news" className="container news__container">
        <Swiper className="news__hot" pagination={true} modules={[Pagination]}>
          {this.hotNews.map((feed, index) => {
            return (
              <SwiperSlide key={`news-hot-${index}`}>
                <HotNews
                  title={feed.title}
                  text={feed.text}
                  avatar={feed.avatar}
                  author={feed.author}
                  role={feed.role}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="news__latest">
          <h1>Get The Latest News Here</h1>
          {this.lastestNews.map((feed, index) => {
            return (
              <LatestNews
                key={`latest-news-${index}`}
                img={feed.img}
                date={feed.date}
                author={feed.author}
                text={feed.text}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default News;
