export default function InputCheckbox({ label, options, onChangeCheckbox, required }) {
  return (
    <>
      <label>{label}{required && "*"}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option}
            name={label}
            id={option}
            onChange={(e) => onChangeCheckbox(e.target)}
            required={required}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
}
