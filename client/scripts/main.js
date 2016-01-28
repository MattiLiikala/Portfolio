var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="mainContainer">
      <img src="images/profile.jpg"></img>
      <h1> Matti <span className="surname">Liikala</span> </h1>
        <p>I am an IT -student from University of Turku. For
        a couple of years I have been doing lots of graphics for
        various student events and different projects. My main
        focus is on graphics and UX design.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);
