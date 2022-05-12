// Project files
import EmptyTextImage from "assets/images/empty-text.png";

export default function EmptyTextCategory() {
  return (
    <article className="empty-text-product">
      <img src={EmptyTextImage} alt="An basked with a few fruits" />
      <span>
        You don’t have any product yet. Press add new product to start
      </span>
    </article>
  );
}
