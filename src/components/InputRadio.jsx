export default function InputRadio({ options, label }) {
  return (
    <>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input type="radio" value={option} name={label} />
          <label>{option}</label>
        </div>
      ))}
    </>
  );
}
