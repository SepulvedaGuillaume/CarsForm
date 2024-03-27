export const carsSelect = [
  {
    name: "Modèles",
    data: ["Ford", "Ferrari", "Fiat"],
  },
  {
    name: "Année-modèle",
    data: ["2022", "2023", "2024"],
  },
  {
    name: "Kilométrage",
    data: ["0-5000", "5000-10000", "10000-20000"],
  },
  {
    name: "Puissance fiscale",
    data: ["4cv", "5cv", "6cv"],
  },
];

export const carsRadio = [
  {
    name: "Type de carburant",
    data: ["diesel", "essence", "electrique", "LPG", "hybride"],
  },
  {
    name: "Boite de vitesse",
    data: ["automatique", "manuelle"],
  },
  {
    name: "Etat",
    data: [
      "excellent",
      "très bon",
      "bon",
      "correct",
      "endommagée",
      "pour pièces",
      "neuf",
    ],
  },
  {
    name: "Origine",
    data: [
      "dédouanée",
      "pas encore dédouanée",
      "ww au Maroc",
      "importée neuve",
    ],
  },
  {
    name: "Nombres de portes",
    data: ["3", "5"],
  },
  {
    name: "Première main",
    data: ["oui", "non"],
  },
];


export const carsInput = [{
  
  name: "Prix",
  type: "number",
  placeholder: "0",
  min: 1,
  devise: "DH"
},
{
  name: "Titre de l'annonce",
  type: "text",
  placeholder: "Titre de l'annonce"
}];

export const carsArea = {
  name: "Texte de l'annonce",
  rows:8,
  cols: 45,
}
export const carsCheck = {
  name: "Plus de détails",
  data: ["Jantes en aluminium", "Airbags","Climatisation","Système de navigation"]
}
