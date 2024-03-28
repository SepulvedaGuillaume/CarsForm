export default function Input({
  label,
  type,
  devise,
  placeholder,
  min,
  onChangeInput,
}) {
  return (
    <>
      <div>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={label}
          min={min}
          onChange={(e) => onChangeInput(e.target)}
        />
        {devise && <div name={devise}>{devise}</div>}
      </div>
    </>
  );
}
