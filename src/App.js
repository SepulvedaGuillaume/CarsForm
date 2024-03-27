import InputCheckbox from "./components/InputCheckbox";
import Input from "./components/Input";
import InputRadio from "./components/InputRadio";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { carsSelect, carsRadio, carsInput, carsArea, carsCheck } from "./data";
import { useState, useRef } from "react";


export default function App() {
  const formRef = useRef({})
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    miles: "",
    fiscalEngine: "",
    fuel:"",
    gearBox:"",
    state:"",
    origin:"",
    doors:"",
    firstHand:"",
    price:"",
    title:"",
    description:"",
    details:[]


  });

  const [cars, setCars] = useState([]);
  console.log(cars);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cloneArr = [...cars];
    cloneArr.push(formData);
    setCars(cloneArr);
    formRef.current.reset()
    setFormData({
      model: "",
      year: "",
      miles: "",
      fiscalEngine: "",
      fuel:"",
      gearBox:"",
      state:"",
      origin:"",
      doors:"",
      firstHand:"",
      price:"",
      title:"",
      description:"",
      details:[]
    });
  };

  const handleChange = (target) => {
    const {name, value, checked} = target
    console.log()
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
            Modèle: {car.model}, Année: {car.year}, Km: {car.miles}, CV: {car.fiscalEngine}, Carburant: {car.fuel}, Boite de vitesse: {car.gearBox}, Etat: {car.state}, Origine: {car.origin}, Portes: {car.doors}, Première main: {car.firstHand}, Prix: {car.price}, Titre: {car.title}, Description: {car.description}, Detail: {car?.details?.map((detail)=>detail)}
          </li>
        ))}
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
            />
          ))}
        </div>
        <div>
          {carsInput.map((value, index,) => (
            <Input
              label={value.name}
              type={value.type}
              devise={value.devise}
              placeholder={value.placeholder}
              min={value.min}
              key={index}
              onChangeInput ={handleChange}
            />
          ))}
        </div>
        <div>
          <TextArea
            label={carsArea.name}
            rows={carsArea.rows}
            cols={carsArea.cols}
            onChangeText = {handleChange}
          />
        </div>
        <div>
          <InputCheckbox label={carsCheck.name} options={carsCheck.data} onChangeText/>
        </div>
        <button>Ajouter ma voiture </button>
      </form>
    </>
  );
}
