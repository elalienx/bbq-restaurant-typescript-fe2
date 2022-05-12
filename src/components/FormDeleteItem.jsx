// NPM package
import { useState } from "react";

// Project files
import formData from "data/formDelete.json";
import { deleteDocument } from "scripts/fireStore";
import { useModal } from "state/ModalContext";
import { useItems } from "state/ItemsContext";
import InputField from "./InputField";

export default function FormDeleteItem({ item, path }) {
  // Global state
  const { deleteItem } = useItems();
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    if (form.compare === item.title) {
      const isDone = deleteDocument(path, item.id).catch(onFail);

      if (isDone) onSuccess(item.id);
    } else {
      alert("The name does not match");
    }
  }

  function onSuccess(id) {
    deleteItem(id);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Delete item</h2>
      <p className="danger">
        Doing so will permanently delete the data asociated with this item.
      </p>
      <p>
        Confirm you want to delete this item by typing its name:{" "}
        <b>{item.title}</b>.
      </p>
      {/* 🚨 */}
      <InputField setup={formData[0]} state={[form, setForm]} />
      <button className="button danger">Delete this item</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Keep item
      </button>
    </form>
  );
}
