import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="images/netflix-logo.png" alt="logo" height="55px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fw-bold active" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                Movies
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                My List
              </Nav.Link>
            </Nav>
            <Nav className="flex-row align-items-center">
              <Nav.Link href="#" className="text-white">
                <i className="bi bi-search icons fs-5 mx-3 m-lg-0"></i>
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-white">
                KIDS
              </Nav.Link>
              <Nav.Link href="#" className="text-white me-3">
                <i className="bi bi-bell icons fs-5 mx-3 m-lg-0"></i>
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <img src="images/avatar.png" alt="logo" height="49px" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
