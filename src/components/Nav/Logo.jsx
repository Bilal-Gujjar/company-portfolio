import logo from'./logo.svg'

function Logo() {
    return (
      <div className="logo">
        <h3><img src={logo} style = {{width:"150px",height:"150px"}}/></h3>
      </div>
    );
  }

export default Logo;
