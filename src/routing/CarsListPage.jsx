import CarsList from "../components/CarsList";

export default function CarsListPage() {


  return (
    <>
      <h2>Liste des voitures</h2>
      <CarsList cars={cars} />
    </>
  );
}
