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
      <div className="margin">
        <label>{label}{required && <span style={{color: "red"}}> *</span>}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={label}
          min={min}
          onChange={(e) => onChangeInput(e.target)}
          required={required}
        />
        {devise && <span name={devise}>{devise}</span>}
      </div>
    </>
  );
}
