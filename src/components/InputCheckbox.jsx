export default function InputCheckbox({ label, options, onChangeCheckbox, required }) {
  return (
    <div className="margin">
      <label>{label}{required && <span style={{color: "red"}}> *</span>}</label>
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
          <label id="option" htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}
