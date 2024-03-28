import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import InputRadio from "./InputRadio";
import Select from "./Select";
import TextArea from "./TextArea";
import { carsSelect, carsRadio, carsInput, carsArea, carsCheck } from "../data";

export default function AddCar({
  handleSubmit,
  formRef,
  handleChange,
  formData,
}) {
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        {carsSelect.map((value, index) => (
          <Select
            onChangeSelect={handleChange}
            options={value.data}
            label={value.label}
            name={value.name}
            key={index}
            formData={formData}
            required={value.required}
          />
        ))}
      </div>
      <div>
        {carsRadio.map((value, index) => (
          <InputRadio
            options={value.data}
            label={value.name}
            key={index}
            onChangeRadio={handleChange}
            required={value.required}
          />
        ))}
      </div>
      <div>
        {carsInput.map((value, index) => (
          <Input
            label={value.name}
            type={value.type}
            devise={value.devise}
            placeholder={value.placeholder}
            min={value.min}
            key={index}
            onChangeInput={handleChange}
            required={value.required}
          />
        ))}
      </div>
      <div>
        <TextArea
          label={carsArea.name}
          rows={carsArea.rows}
          cols={carsArea.cols}
          onChangeText={handleChange}
          required={carsArea.required}
        />
      </div>
      <div>
        <InputCheckbox
          label={carsCheck.name}
          options={carsCheck.data}
          onChangeCheckbox={handleChange}
          required={carsCheck.required}
        />
      </div>
      <button>Ajouter ma voiture </button>
    </form>
  );
}
