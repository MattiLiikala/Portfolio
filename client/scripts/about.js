var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="mainContainer">
      <h1> Contact Me! </h1>
        <h2>Email:
        <a href="mailto:mamilii@utu.fi" target="_top">mamilii@utu.fi</a></h2>
        <h2>
        Phone: +358 409642995</h2>
        <h2>
        <a href="https://www.linkedin.com/in/mattiliikala">Visit my LinkedIn profile!</a>
        </h2>
      </div>
    );
  }
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);
