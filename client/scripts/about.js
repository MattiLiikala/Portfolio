var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="mainContainer">
      <h4> Contact Me! </h4>
        <h3>Email:
        <a href="mailto:mamilii@utu.fi" target="_top">mamilii@utu.fi</a></h3>
        <h3>
        Phone: +358 409642995</h3>
        <h3>
        <a href="https://www.linkedin.com/in/mattiliikala">Visit my LinkedIn profile!</a>
        </h3>
      </div>
    );
  }
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);
