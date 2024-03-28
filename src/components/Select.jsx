export default function Select({
  onChangeSelect,
  options,
  label,
  name,
  formData,
  required
}) {
  return (
    <div class="margin">
      <label htmlFor={label}>{label}{required && <span style={{color: "red"}}> *</span>}</label>
      <select
        name={name}
        id={name}
        value={formData.name}
        onChange={(e) => onChangeSelect(e.target)}
        required={required}
      >
        <option value="">Sélectionner</option>
        {options.map((option, index) => (
          <option key={index} value={option} >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
