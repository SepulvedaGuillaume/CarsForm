import Car from "./Car";

export default function CarsList({ cars }) {
  return <>{cars && cars.map((car, index) => <Car car={car} key={index} />)}</>;
}
