// NPM packages
import { Link } from "react-router-dom";

// Project files
import iProduct from "interfaces/iProduct";

// Interfaces
interface iProps {
  item: iProduct;
}

export default function ItemProduct({ item }: iProps) {
  return (
    <Link to={`/product/${item.id}`}>
      <img src={item.imageURL} alt="Product thumbnail" />
      {item.title}
    </Link>
  );
}
