// Project files
import formData from "data/formProduct";
import FormUpdate from "components/FormUpdateItem";
import FormDelete from "components/FormDeleteItem";
import { useModal } from "state/ModalContext";

export default function ItemAdminProduct({ path, item }) {
  // Global state
  const { setModal } = useModal();

  // Components
  const ItemUpdate = <FormUpdate item={item} formData={formData} path={path} />;
  const ItemDelete = <FormDelete item={item} path={path} />;

  return (
    <article className="item-admin-product">
      <img src={item.imageURL} alt={item.description} />
      <span>{item.title}</span>
      <span className="spacer"></span>
      <b>{item.price}kr</b>
      <button className="button icon" onClick={() => setModal(ItemUpdate)}>
        ✍️
      </button>
      <button className="button icon" onClick={() => setModal(ItemDelete)}>
        🗑
      </button>
    </article>
  );
}
