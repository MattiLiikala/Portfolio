var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="mainContainer">
      <h1> Contact Me! </h1>
        <h2>Email:
        <a href="mailto:mamilii@utu.fi" target="_top">mamilii@utu.fi</a>
        <br></br>
        Phone: +358 409642995
        </h2>
      </div>
    );
  }
}); 

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);
