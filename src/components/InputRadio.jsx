export default function InputRadio({ options, label, onChangeRadio, required }) {
  return (
    <>
      <label>{label}{required && "*"}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option}
            name={label}
            id={option}
            onChange={(e) => onChangeRadio(e.target)}
            required={required}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
}
