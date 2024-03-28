import { useLocation } from "react-router-dom";
import CarsList from "../components/CarsList";

export default function CarsListPage() {
  const cars = useLocation().state;

  return (
    <>
      <h2>Liste des voitures</h2>
      <CarsList cars={cars} />
    </>
  );
}
