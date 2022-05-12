// NPM packages
import { useEffect, useState } from "react";

// Project files
import { useItems } from "state/ItemsContext";
import eStatus from "interfaces/eStatus";
import ItemCategory from "components/ItemCategory";
import { readCollection } from "scripts/fireStore";
import iCategory from "interfaces/iCategory";

export default function Menu() {
  // Global state
  const { items, setItems } = useItems();

  // Local state
  const [status, setStatus] = useState(eStatus.Loading);

  // Properties
  const path = "menu";

  // Methods
  useEffect(() => {
    async function loadData(path: string) {
      const data = await readCollection(path).catch(onFail);

      if (data) onSuccess(data as iCategory[]);
    }
    loadData(path);
  }, []);

  function onSuccess(data: iCategory[]) {
    // @ts-ignore 🩹🤕
    setItems(data);
    setStatus(eStatus.Loaded);
  }

  function onFail(error: string) {
    console.error(error);
    setStatus(eStatus.Error);
  }

  // Components
  // @ts-ignore 🩹🤕
  const Items = items.map((item) => <ItemCategory key={item.id} item={item} />);

  // Safeguards
  if (status === eStatus.Loading) return <p>⏱</p>;
  if (status === eStatus.Error) return <p>😱</p>;

  return (
    <div id="menu">
      <h1>Here is our menu</h1>
      {Items}
    </div>
  );
}
