var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="mainContainer">
      <img src="images/profile.png"></img>
        <h1> Matti <span id="surname">Liikala</span> </h1>
        
          <p1>I am an IT student from University of Turku. For
          a couple of years I have been doing lots of graphics for
          various student events and different projects. My main
          focus is on graphics and UX design. Feel free to take a look at my
          <a href="/projects.html"> projects.</a>
          </p1>
        
        <br></br><br></br>
        <a href="mailto:mamilii@utu.fi" target="_top" className= "social" ><img class="social" src="images/mail_icon.png" alt=""/></a>
        <a href="https://www.linkedin.com/in/mattiliikala" target="_top"><img className="social" src="images/LinkedIn_icon.png" alt="" /></a>
        <a href="https://github.com/MattiLiikala" target="_top"><img className="social" src="images/github_icon.png" alt="" /></a>
      </div>
    );
  }
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);
