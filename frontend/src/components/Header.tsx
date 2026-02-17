import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold fs-4">
          🛍 Loja Do Bendito
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link>Início</Nav.Link>
          <Nav.Link>Produtos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
