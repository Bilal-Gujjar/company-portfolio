

function LatestNews (props){
  
    return (
      <div className="news__latest__feed">
        <img src={props.img} alt="" />
        <div>
          <div className="feed_info">
            <span>{props.date}</span>
            <span>By {props.author}</span>
          </div>
          <p className="text">{props.text}</p>
        </div>
      </div>
    );
  }


export default LatestNews;
