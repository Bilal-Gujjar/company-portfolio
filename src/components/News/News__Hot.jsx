

function HotNews (props) {
    return (
      <div className="news__hot__feed">
        <h3>{props.title}</h3>
        <p className="text">{props.text}</p>
        <div className="news__hot__feed__author">
          <img src={props.avatar} alt="" />
          <div>
            <h5>{props.author}</h5>
            <span className="text">{props.role}</span>
          </div>
        </div>
      </div>
    );
  }


export default HotNews;
