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
    <form onSubmit={handleSubmit} ref={formRef} id="form">
      <div>
        <h2>Détails de l'annonce</h2>
        <div>Ajouter plus de détails sur votre annonce pour un maximum de visibilité</div>
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
        <h2>Information de l'annonce</h2>
        <div>Une annonce avec un prix et une description bien détaillé a 10 fois plus de visibilité</div>
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
        <h2>Plus de détails</h2>
        <div>Ajouter des détails supplémentaires</div>
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
