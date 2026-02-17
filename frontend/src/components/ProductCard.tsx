import { Card, Button } from "react-bootstrap";
import { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="product-card h-100 shadow-sm border-0">
      <div className="image-container">
        <Card.Img src={product.image} />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-title">
          {product.title}
        </Card.Title>

        <Card.Text className="price">
          R$ {product.price.toFixed(2)}
        </Card.Text>

        <Button variant="success" className="mt-auto w-100">
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
