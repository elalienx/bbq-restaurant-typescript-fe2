import { ChangeEvent } from "react";
import iFields from "interfaces/iField";

interface iProps {
  setup: iFields;
  state: [string, () => {}];
}

export default function InputField({ setup, state }: iProps) {
  const { key, autoFocus, label, placeholder, type, required } = setup;
  const [getter, setter] = state;

  // Methods
  function onChange(event: ChangeEvent) {
    const clonedItem = { ...getter };
    clonedItem[key] = event.target.value;

    setter(clonedItem);
  }

  return (
    <label className="input-field">
      <div>{label}:</div>
      <input
        autoFocus={autoFocus}
        onChange={(event) => onChange(event)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={getter[key]}
      />
    </label>
  );
}
