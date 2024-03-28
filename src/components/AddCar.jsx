import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import InputRadio from "./InputRadio";
import Select from "./Select";
import TextArea from "./TextArea";
import { carsSelect, carsRadio, carsInput, carsArea, carsCheck } from "../data";
import { useEffect, useState } from "react";

export default function AddCar({
  handleSubmit,
  formRef,
  handleChange,
  formData,
}) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // merge a new array with only required fields
    const requiredFields = [
      ...carsSelect.filter((value) => value.required),
      ...carsRadio.filter((value) => value.required),
      ...carsInput.filter((value) => value.required),
      ...(carsArea.required ? [carsArea] : []),
      ...(carsCheck.required ? [carsCheck] : []),
    ];

    // for each required fields return true if the fields is not empty
    const requiredFieldsData = requiredFields.map((value) => {
      return value.name === "details"
        ? formData[value.name].length > 0
        : formData[value.name] !== "";
    });

    // if all fields required are not empty set disabled to false
    if (requiredFieldsData.every((value) => value === true)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

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
      <button disabled={disabled}>Ajouter ma voiture </button>
    </form>
  );
}
