import InputCheckbox from "./components/InputCheckbox";
import Input from "./components/Input";
import InputRadio from "./components/InputRadio";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { carsSelect, carsRadio, carsInput, carsArea, carsCheck } from "./data";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    miles: "",
    fiscalEngine: "",
  });

  const [cars, setCars] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cloneArr = [...cars];
    cloneArr.push(formData);
    setCars(cloneArr);
    setFormData({
      model: "",
      year: "",
      miles: "",
      fiscalEngine: "",
    });
  };

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "new" ? checked : value,
    }));
  };

  return (
    <>
      <h1>Cars form</h1>
      {cars &&
        cars.map((car, index) => (
          <li key={index}>
            Modèle: {car.model}, Année: {car.year}, Km: {car.miles}, CV :{" "}
            {car.fiscalEngine}
          </li>
        ))}
      <form onSubmit={handleSubmit}>
        <div>
          {carsSelect.map((value, index) => (
            <Select
              handleChange={handleChange}
              options={value.data}
              label={value.label}
              name={value.name}
              key={index}
              onChange={handleChange}
              formData={formData}
            />
          ))}
        </div>
        <div>
          {carsRadio.map((value, index) => (
            <InputRadio options={value.data} label={value.name} key={index} />
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
            />
          ))}
        </div>
        <div>
          <TextArea
            label={carsArea.name}
            rows={carsArea.rows}
            cols={carsArea.cols}
          />
        </div>
        <div>
          <InputCheckbox label={carsCheck.name} options={carsCheck.data} />
        </div>
        <button>Ajouter ma voiture </button>
      </form>
    </>
  );
}
