export default function Car({ car }) {
  return (
    <li>
      Modèle: {car.model}, Année: {car.year}, Km: {car.miles}, CV:{" "}
      {car.fiscalEngine}, Carburant: {car.fuel}, Boite de vitesse: {car.gearBox}
      , Etat: {car.state}, Origine: {car.origin}, Portes: {car.doors}, Première
      main: {car.firstHand}, Prix: {car.price}, Titre: {car.title}, Description:{" "}
      {car.description}, Detail: {car?.details?.map((detail) => detail)}
    </li>
  );
}
