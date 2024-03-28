export default function InputRadio({ options, label, onChangeRadio, required }) {
  return (
    <div className="margin">
      <label>{label}{required && <span style={{color: "red"}}> *</span>}</label>
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
          <label id="option" htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}
