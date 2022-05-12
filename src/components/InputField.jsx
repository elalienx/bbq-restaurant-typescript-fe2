export default function InputField({ setup, state }) {
  const { key, autoFocus, label, placeholder, type, required } = setup;
  const [value, setValue] = state; // is now an object not an string

  // Methods
  function onChange(event) {
    const clonedItem = { ...value };
    clonedItem[key] = event.target.value;

    setValue(clonedItem);
  }

  return (
    <label className="input-field">
      <div>{label}:</div>
      <input
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value[key]}
      />
    </label>
  );
}
