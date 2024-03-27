export default function TextArea({label, rows, cols}) {
    return (
      <>
        <label>{label}</label>
        <div>
          <textarea id={label} rows = {rows} cols={cols}></textarea>
        </div>
      </>
    );
  }
  