export default function Select({ options, label }) {
  console.log(label);
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select>
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
