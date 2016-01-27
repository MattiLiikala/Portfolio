var Navbar = ReactBootstrap.Navbar,
NavBrand = ReactBootstrap.NavBrand,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem;

const navbarInstance = (
  <Navbar className="navBarDark">
    <NavBrand className="navBrand" eventKey={1}><a href="/index.html">Portfolio</a></NavBrand>
    <Nav>
      <NavItem className="navigationLink" eventKey={2} href="/images.html"><p className="navItem">Gallery</p></NavItem>
      <NavItem className="navigationLink" eventKey={3} href="/about.html"><p className="navItem">Contact</p></NavItem>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance,
  document.getElementById('navigationBar')
);
