export default function TextArea({ label, rows, cols, onChangeText }) {
  return (
    <>
      <label>{label}</label>
      <div>
        <textarea
          id={label}
          rows={rows}
          cols={cols}
          onChange={(e) => onChangeText(e.target)}
          name={label}
        ></textarea>
      </div>
    </>
  );
}
