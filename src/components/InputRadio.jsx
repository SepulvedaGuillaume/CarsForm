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
            onChange={(e) => onChangeRadio(e.target)}
          />
          <label>{option}</label>
        </div>
      ))}
    </>
  );
}
