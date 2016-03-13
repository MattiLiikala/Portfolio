var Navbar = ReactBootstrap.Navbar,
NavBrand = ReactBootstrap.NavBrand,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem;

const navbarInstance = (
  <Navbar className="navBarDark">
    <NavBrand className="navBrand" eventKey={1}><a href="/index.html">Portfolio</a></NavBrand>
    <Nav>
      <NavItem className="navigationLink" eventKey={2} href="/projects.html"><p2 className="navItem">Projects</p2></NavItem>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance,
  document.getElementById('navigationBar')
);
