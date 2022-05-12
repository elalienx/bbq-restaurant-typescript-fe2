// Project files
import iCategory from "interfaces/iCategory";

// Interface
interface iProps {
  item: iCategory;
}

export default function ItemCategory({ item }: iProps) {
  return (
    <article className="item-category">
      <img src={item.imageURL} alt="Category thumbnail" />
      <div className="content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
