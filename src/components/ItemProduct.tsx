// NPM packages
import { Link } from "react-router-dom";

// Project files
import iProduct from "interfaces/iProduct";

// Interfaces
interface iProps {
  item: iProduct;
  categoryId: string;
}

export default function ItemProduct({ item, categoryId }: iProps) {
  return (
    <Link to={`/menu/${categoryId}/${item.id}`}>
      <img src={item.imageURL} alt="Product thumbnail" />
      {item.title}
    </Link>
  );
}
