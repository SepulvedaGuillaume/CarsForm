export default function InputRadio({ options, label, onChangeRadio }) {
  return (
    <>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option}
            name={label}
            id={option}
            onChange={(e) => onChangeRadio(e.target)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
}
