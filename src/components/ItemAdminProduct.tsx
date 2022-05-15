// Project files
import FormUpdate from "components/FormUpdateItem";
import FormDelete from "components/FormDeleteItem";
import formData from "data/formProduct.json";
import iProduct from "interfaces/iProduct";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iProduct;
  path: string;
}

export default function ItemAdminProduct({ item, path }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Components
  const ItemUpdate = <FormUpdate item={item} formData={formData} path={path} />;
  const ItemDelete = <FormDelete item={item} path={path} />;

  return (
    <article className="item-admin-product">
      <img src={item.imageURL} alt={item.text} />
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
