// NPM packages
import { createContext, useContext, useState, ReactNode } from "react";

// Project files
import iCategory from "interfaces/iCategory";

// Interface
interface iProps {
  children: ReactNode;
}
interface iValues {
  items: iCategory[];
  setItems: Function;
  addItem: Function;
  editItem: Function;
  deleteItem: Function;
}

// Properties
const initialValues: iValues = {
  items: [],
  setItems: () => {},
  addItem: () => {},
  editItem: () => {},
  deleteItem: () => {},
};
const Context = createContext(initialValues);

// Methods
export function ItemsProvider({ children }: iProps) {
  // Local state
  const [items, setItems] = useState(Array<iCategory>());

  // Properties
  const value: iValues = { items, setItems, addItem, editItem, deleteItem };

  // Methods
  function addItem(newItem: iCategory) {
    setItems([...items, newItem]);
  }

  function editItem(editedItem: iCategory) {
    const clonedItems = [...items];
    const index = clonedItems.findIndex((item) => item.id === editedItem.id);

    clonedItems[index] = editedItem;
    setItems(clonedItems);
  }

  function deleteItem(id: string) {
    const filteredItems = items.filter((item) => item.id !== id);

    setItems(filteredItems);
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useItems() {
  const context = useContext(Context);
  const errorText =
    "To use useItems(), you need to wrap the parent component with <ItemsProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
