// Project files
import { Link } from "react-router-dom";

// Project files
import iCategory from "interfaces/iCategory";

// Interface
interface iProps {
  item: iCategory;
}

export default function ItemCategory({ item }: iProps) {
  // Properties
  const link = `/menu/${item.id}`;

  return (
    <Link to={link} className="item-category">
      <img src={item.imageURL} alt="Category thumbnail" />
      <div className="content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Link>
  );
}
