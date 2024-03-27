export default function Input({label, type, devise, placeholder, min}) {
    return (
      <>
        <div>
          <label>{label}</label>

          <input type={type} placeholder={placeholder} name={label} min={min}/>
          {devise && <div name={devise}>{devise}</div>}
          
        </div>

      </>
    );
  }
  