// NPM Packages
import { Link } from "react-router-dom";

// Project files
import { useModal } from "state/ModalContext";
import formData from "data/formCategory";
import FormUpdate from "components/FormUpdateItem";
import FormDelete from "components/FormDeleteItem";

export default function ItemAdminCategory({ item, path }) {
  const { title, imageURL } = item;

  // Global state
  const { setModal } = useModal();

  // Properties
  const link = `/admin/${item.id}`;

  // Compoennt
  const ItemUpdate = <FormUpdate item={item} formData={formData} path={path} />;
  const ItemDelete = <FormDelete item={item} path={path} />;

  return (
    <article className="item-admin-category">
      <div className="content">
        <Link to={link}>
          <img src={imageURL} />
        </Link>
        <div className="buttons">
          <button className="button icon" onClick={() => setModal(ItemUpdate)}>
            ✍️
          </button>
          <button className="button icon" onClick={() => setModal(ItemDelete)}>
            🗑
          </button>
        </div>
      </div>
      <Link className="title" to={link}>
        {title}
      </Link>
    </article>
  );
}
