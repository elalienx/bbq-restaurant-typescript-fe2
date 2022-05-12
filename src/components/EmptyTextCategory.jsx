// Project files
import EmptyTextImage from "assets/images/empty-text.png";

export default function EmptyTextCategory() {
  return (
    <article>
      <img src={EmptyTextImage} alt="An basked with a few fruits" />
      <p>You don’t have any category yet. Press add new category to start</p>
    </article>
  );
}
