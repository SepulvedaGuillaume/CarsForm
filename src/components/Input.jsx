export default function Input({
  label,
  type,
  devise,
  placeholder,
  min,
  onChangeInput,
  required
}) {
  return (
    <>
      <div>
        <label>{label}{required && "*"}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={label}
          min={min}
          onChange={(e) => onChangeInput(e.target)}
          required={required}
        />
        {devise && <div name={devise}>{devise}</div>}
      </div>
    </>
  );
}
