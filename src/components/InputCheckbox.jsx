export default function InputCheckbox({ label, options, onChangeCheckbox }) {
  return (
    <>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" value={option} name={label} id={option} onChange={(e) => onChangeCheckbox(e.target)}/>
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
}
