import { Component } from "react";

class Testimony extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="testimony">
        <div className="testimony__avatar">
          <img src={this.props.img} />
        </div>
        <div className="testimony__comment">
          <p className="text">
            15+ years of experience in IT industy 
          </p>
          <p className="text">
            <strong style={{ color: "black" }}>Mayan Ali / </strong>
            CTO @ Solux Technologies solutions
          </p>
        </div>
      </div>
    );
  }
}
export default Testimony;
