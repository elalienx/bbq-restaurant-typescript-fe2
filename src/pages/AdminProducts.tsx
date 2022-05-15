// NPM packages
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Project files
import FormCreateItem from "components/FormCreateItem";
import EmptyText from "components/EmptyTextProduct";
import ItemProduct from "components/ItemAdminProduct";
import formData from "data/formProduct.json";
import { readCollection } from "scripts/fireStore";
import { useItems } from "state/ItemsContext";
import { useModal } from "state/ModalContext";

export default function AdminProducts() {
  // Global state
  const { categoryId } = useParams();
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Properties
  const path = `menu/${categoryId}/content`;

  // Methods
  useEffect(() => {
    async function loadData() {
      const data = await readCollection(path).catch(onFail);

      if (data) onSuccess(data);
    }
    loadData();
  }, []);

  function onSuccess(data) {
    setItems(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the categories. Try again");
    setStatus(2);
  }

  // Components
  const Items = items.map((item) => (
    <ItemProduct key={item.id} item={item} path={path} />
  ));
  const ItemCreate = <FormCreateItem formData={formData} path={path} />;

  // Safeguards
  if (status === 0) return <p>Loading ⏱</p>;
  if (status === 2) return <p>Error ❌</p>;

  return (
    <div id="admin-products">
      <h1>BBQ Admin interface</h1>
      <h2>Here are {categoryId} menu items</h2>
      <div className="items">{items.length > 0 ? Items : <EmptyText />}</div>
      <button className="button primary" onClick={() => setModal(ItemCreate)}>
        Add new product
      </button>
      <Link className="button secondary" to="/admin">
        Go back
      </Link>
    </div>
  );
}
