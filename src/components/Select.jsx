export default function Select({
  handleChange,
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
        onChange={handleChange}
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
