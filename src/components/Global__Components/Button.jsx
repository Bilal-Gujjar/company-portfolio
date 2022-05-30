

function Button(props) {
// class Button extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
    return (
      <button className="btn" onClick={props}>
        {props.content}
      </button>
    );
  }


export default Button;
