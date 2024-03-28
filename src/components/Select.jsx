export default function Select({
  onChangeSelect,
  options,
  label,
  name,
  formData,
}) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        name={name}
        id={name}
        value={formData.name}
        onChange={(e) => onChangeSelect(e.target)}
      >
        <option value="">Sélectionner</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
