export const carsSelect = [
  {
    label: "Modèles",
    name: "model",
    data: ["Ford", "Ferrari", "Fiat"],
  },
  {
    label: "Année-modèle",
    name: "year",
    data: ["2022", "2023", "2024"],
  },
  {
    label: "Kilométrage",
    name: "miles",
    data: ["0-5000", "5000-10000", "10000-20000"],
  },
  {
    label: "Puissance fiscale",
    name: "fiscalEngine",
    data: ["4cv", "5cv", "6cv"],
  },
];

export const carsRadio = [
  {
    label: "Type de carburant",
    name: "fuel",
    data: ["diesel", "essence", "electrique", "LPG", "hybride"],
  },
  {
    label: "Boite de vitesse",
    name: "gearBox",
    data: ["automatique", "manuelle"],
  },
  {
    label: "Etat",
    name: "state",
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
    label: "Origine",
    name: "origin",
    data: [
      "dédouanée",
      "pas encore dédouanée",
      "ww au Maroc",
      "importée neuve",
    ],
  },
  {
    label: "Nombres de portes",
    name: "doors",
    data: ["3", "5"],
  },
  {
    label: "Première main",
    name: "firstHand",
    data: ["oui", "non"],
  },
];

export const carsInput = [
  {
    label: "Prix",
    name: "price",
    type: "number",
    placeholder: "0",
    min: 1,
    devise: "DH",
  },
  {
    label: "Titre de l'annonce",
    name: "title",
    type: "text",
    placeholder: "Titre de l'annonce",
  },
];

export const carsArea = {
label: "Texte de l'annonce",
name: "description",
rows: 8,
  cols: 45,
};
export const carsCheck = {
label: "Plus de détails",
name: "details",
data: [
    "Jantes en aluminium",
    "Airbags",
    "Climatisation",
    "Système de navigation",
  ],
};
