// NPM packages
import { useEffect, useState } from "react";

// Project files
import { useItems } from "state/ItemsContext";
import eStatus from "interfaces/eStatus";
import ItemCategory from "components/ItemCategory";
import { readCollection } from "scripts/fireStore";
import iProduct from "interfaces/iProduct";
import { useParams } from "react-router-dom";

export default function Products() {
  // Global state
  const { categoryId } = useParams();
  const { items, setItems } = useItems();

  // Local state
  const [status, setStatus] = useState(eStatus.Loading);

  // Properties
  const path = `menu/${categoryId}/content`;

  // Methods
  useEffect(() => {
    async function loadData(path: string) {
      const data = await readCollection(path).catch(onFail);

      if (data) onSuccess(data as iProduct[]);
    }
    loadData(path);
  }, []);

  function onSuccess(data: iProduct[]) {
    setItems(data);
    setStatus(eStatus.Loaded);
  }

  function onFail(error: string) {
    console.error(error);
    setStatus(eStatus.Error);
  }

  // Components
  const Items = items.map((item) => <ItemCategory key={item.id} item={item} />);

  // Safeguards
  if (status === eStatus.Loading) return <p>⏱</p>;
  if (status === eStatus.Error) return <p>😱</p>;

  return (
    <div id="products">
      <h1>This is our menu for {categoryId}</h1>
      {Items}
    </div>
  );
}
