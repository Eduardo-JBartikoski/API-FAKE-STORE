import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Minha Loja</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          {produtos.map((produto) => (
            <Col key={produto.id} md={3} sm={6} xs={12} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div
                  style={{
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={produto.image}
                    style={{ maxHeight: "180px", objectFit: "contain" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem", minHeight: "50px" }}>
                    {produto.title}
                  </Card.Title>
                  <Card.Text>Preço: R$ {produto.price}</Card.Text>
                  <Button variant="success" className="w-100">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Produtos;
