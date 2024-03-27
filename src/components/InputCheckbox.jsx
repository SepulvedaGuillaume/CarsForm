export default function InputCheckbox({ label, options }) {
  return (
    <>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" value={option} name={label} id={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
}
