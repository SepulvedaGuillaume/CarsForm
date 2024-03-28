import { useState, useRef } from "react";
import CarsList from "./components/CarsList";
import AddCar from "./components/AddCar";

export default function App() {
  const formRef = useRef({});

  const [formData, setFormData] = useState({
    model: "",
    year: "",
    miles: "",
    fiscalEngine: "",
    fuel: "",
    gearBox: "",
    state: "",
    origin: "",
    doors: "",
    firstHand: "",
    price: "",
    title: "",
    description: "",
    details: [],
  });

  const [cars, setCars] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cloneArr = [...cars];
    cloneArr.push(formData);
    setCars(cloneArr);
    formRef.current.reset();
  };

  const handleChange = (target) => {
    const { name, value, checked } = target;
    const cloneArr = [...formData.details];
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "details" && checked
          ? cloneArr.concat(value)
          : name === "details" && !checked
          ? cloneArr.filter((detail) => detail !== value)
          : value,
    }));
  };

  return (
    <>
      <h1>Cars form</h1>
      <CarsList cars={cars} />
      <AddCar
        handleSubmit={handleSubmit}
        formRef={formRef}
        handleChange={handleChange}
        formData={formData}
      />
    </>
  );
}
