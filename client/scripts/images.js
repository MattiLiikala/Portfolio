var MainComponent = React.createClass({
  render: function(){
    return(

      <div className="mainContainer" id="gallery_container">
      	<h2>Posters and other printed material</h2>
        <p>Posters I have made for some student events.</p>
      		<a class="poster-image-link" href="images/JR15_juliste.jpg" data-lightbox="Posters" data-title="Poster for a student-cruise"><img class="poster" src="images/JR15_juliste_thumb.jpg" alt=""/></a>
      		<a class="poster-image-link" href="images/TR16_juliste.jpg" data-lightbox="Posters" data-title="Poster for another student-cruise"><img class="poster" src="images/TR16_juliste_thumb.jpg" alt="" /></a>
          <a class="poster-image-link" href="images/HoT_juliste.jpg" data-lightbox="Posters" data-title="Poster for a Hackathon"><img class="poster" src="images/HoT_juliste_thumb.jpg" alt=""/></a>
      		<a class="poster-image-link" href="images/VectorSeminar_juliste.jpg" data-lightbox="Posters" data-title="Poster for Vector -seminar afterparty"><img class="poster" src="images/VectorSeminar_juliste_thumb.jpg" alt="" /></a>
          <a class="poster-image-link" href="images/WappuKansi2.jpg" data-lightbox="Posters" data-title="Cover for Wappulehti, an annual release from the Turku technology students."><img class="poster" src="images/WappuKansi2_thumb.jpg" alt="" /></a>

      	<h2>Under the great sky</h2>
        <p>Under the great sky is a game project I have participated as a graphic designer.
        It is a point and click game based on a scientist named Pjotr Mulkov. In a nutshell
        the main goal is to save the galaxy. I did the ui components and some 3D modelling. </p>
      		<a class="game1-image-link" href="images/UTGS_screencap1.jpg" data-lightbox="Under The Great Sky" data-title="Screen capture from the main menu."><img class="Game1" src="images/UTGS_screencap1_thumb.jpg" alt=""/></a>
      		<a class="game1-image-link" href="images/UTGS_screencap2.jpg" data-lightbox="Under The Great Sky" data-title="Tutorial"><img class="Game1" src="images/UTGS_screencap2_thumb.jpg" alt=""/></a>
      		<a class="game1-image-link" href="images/UTGS_screencap3.jpg" data-lightbox="Under The Great Sky" data-title="Inventory"><img class="Game1" src="images/UTGS_screencap3_thumb.jpg" alt=""/></a>
      		<a class="game1-image-link" href="images/UTGS_screencap4.jpg" data-lightbox="Under The Great Sky" data-title="Gameplay"><img class="Game1" src="images/UTGS_screencap4_thumb.jpg" alt=""/></a>

        <h2>Hamster Shelter</h2>
        <p>Hamster shelter is another game project in which I work as a graphic designer.
        The game is at the moment on early alpha version, but we are participating in the
        ICT ShowRoom -event on 10 march 2016 where it is going to be playable. The idea of
        the game is simply to build a shelter for the hamsters before the meteor shower.</p>
      		<a class="game2-image-link" href="images/HS_screencap1.jpg" data-lightbox="Hamster Shelter" data-title="Gameplay"><img class="Game2" src="images/HS_screencap1_thumb.jpg" alt=""/></a>
      		<a class="game2-image-link" href="images/HS_screencap2.jpg" data-lightbox="Hamster Shelter" data-title="Gameplay"><img class="Game2" src="images/HS_screencap2_thumb.jpg" alt=""/></a>
      		<a class="game2-image-link" href="images/HS_screencap3.jpg" data-lightbox="Hamster Shelter" data-title="Gameplay"><img class="Game2" src="images/HS_screencap3_thumb.jpg" alt=""/></a>

        <h2>Logos</h2>
        <p></p>
        	<a class="logo-image-link" href="images/UTGS_logo.png" data-lightbox="Logos" data-title="Under The Great Sky"><img class="logo" src="images/UTGS_logo_thumb.png" alt=""/></a>
        	<a class="logo-image-link" href="images/Vector_logo.png" data-lightbox="Logos" data-title="Vector ry"><img class="logo" src="images/Vector_logo_thumb.png" alt=""/></a>

      </div>

    );
  }
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);
