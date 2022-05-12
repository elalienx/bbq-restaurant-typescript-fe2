// MPM packages
import { useState } from "react";

// Project files
import InputField from "./InputField";
import { createDocumentWithId, readDocument } from "scripts/fireStore";
import textToURL from "scripts/textToURL";
import { useItems } from "state/ItemsContext";
import { useModal } from "state/ModalContext";

export default function FormCreateItem({ formData, path }) {
  // Global state
  const { addItem } = useItems();
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState({});

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    // 1 Check if a file with the same id exist
    const id = textToURL(form.title);
    const itExist = await readDocument(path, id).catch(onFail);

    if (itExist !== undefined) {
      alert("Sorry the file already exist, use another name");
      return;
    }

    // 2 If it does exist we upload
    const isDone = await createDocumentWithId(path, id, form).catch(onFail);

    if (isDone) onSucess(form, id);
  }

  function onSucess(item, id) {
    item.id = id;
    addItem(item);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  // Components
  const InputFields = formData.map((item) => (
    <InputField key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add item</h2>
      {InputFields}
      <button className="button primary">Add new item</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel item
      </button>
    </form>
  );
}
