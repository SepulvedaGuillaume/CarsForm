import { useRef, useState } from "react";
import AddCar from "../components/AddCar";

export default function AddCarPage() {
  const [cars, setCars] = useState([]);
  const formRef = useRef({});

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

  return (
    <>
      <h2>Ajouter une voiture</h2>
      <AddCar
        handleSubmit={handleSubmit}
        formRef={formRef}
        handleChange={handleChange}
        formData={formData}
      />
    </>
  );
}
