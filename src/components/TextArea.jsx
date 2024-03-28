export default function TextArea({ label, rows, cols, onChangeText, required }) {
  return (
    <>
      <label>{label}{required && "*"}</label>
      <div>
        <textarea
          id={label}
          rows={rows}
          cols={cols}
          onChange={(e) => onChangeText(e.target)}
          name={label}
          required={required}
        ></textarea>
      </div>
    </>
  );
}
