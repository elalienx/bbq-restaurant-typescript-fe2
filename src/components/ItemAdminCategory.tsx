// NPM Packages
import { Link } from "react-router-dom";

// Project files
import FormUpdate from "components/FormUpdateItem";
import FormDelete from "components/FormDeleteItem";
import formData from "data/formCategory.json";
import iCategory from "interfaces/iCategory";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iCategory;
  path: string;
}

export default function ItemAdminCategory({ item, path }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Properties
  const link = `/admin/${item.id}`;

  // Components
  const ItemUpdate = <FormUpdate item={item} formData={formData} path={path} />;
  const ItemDelete = <FormDelete item={item} path={path} />;

  return (
    <article className="item-admin-category">
      <div className="content">
        <Link to={link}>
          <img src={item.imageURL} />
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
        {item.title}
      </Link>
    </article>
  );
}
