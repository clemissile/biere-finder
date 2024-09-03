import { Bar } from "src/types/Bar";

export const findBeers = (search: string): Bar[] => {
  const searchLower = search.toLowerCase();

  // Filtrer les bars
  return bars.filter((bar) =>
    bar.bieres.some(
      (biere) =>
        biere.nom.toLowerCase().includes(searchLower) ||
        biere.type.toLowerCase().includes(searchLower)
    )
  );
};

export const bars: Bar[] = [
  {
    id: 1,
    nom: "Rhumba",
    latlon: [49.182053153144416, -0.3683148181555217],
    bieres: [
      {
        nom: "Francette",
        type: "Blonde",
        degre: 5,
        prix: {
          demi: 2.7,
          pinte: 5.4,
          litre: 10,
        },
      },
      {
        nom: "Bacchus Kriek",
        type: "Rouge",
        degre: 5.8,
        prix: {
          demi: 3.8,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Kasteel Rubus",
        type: "Rouge",
        degre: 7,
        prix: {
          demi: 3.8,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Grisette",
        type: "Blanche",
        degre: 5.2,
        prix: {
          demi: 3.9,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Tripel LeFort",
        type: "Triple",
        degre: 8.8,
        prix: {
          demi: 3.8,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Cuvée des Trolls",
        type: "Blonde",
        degre: 7,
        prix: {
          demi: 4,
          pinte: 8,
          litre: 15,
        },
      },
      {
        nom: "Ypra",
        type: "Blonde",
        degre: 6,
        prix: {
          demi: 3.9,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Marguerite",
        type: "NEIPA",
        degre: 6,
        prix: {
          demi: 3.9,
          pinte: 7.5,
          litre: 14,
        },
      },
    ],
  },
  {
    id: 2,
    nom: "Le Cristal",
    latlon: [49.1832359, -0.3681452],
    bieres: [
      {
        nom: "Campus",
        type: "Blonde",
        degre: 5,
        prix: {
          demi: 3.5,
          pinte: 6.5,
        },
      },
      {
        nom: "Blanche des neiges",
        type: "Blanche",
        degre: 4.9,
        prix: {
          demi: 4,
          pinte: 7.5,
        },
      },
      {
        nom: "JI IPA",
        type: "IPA",
        degre: 6.2,
        prix: {
          demi: 4.5,
          pinte: 8.5,
        },
      },
      {
        nom: "Saint Idesbald",
        type: "Blonde",
        degre: 6.5,
        prix: {
          demi: 4,
          pinte: 7.5,
        },
      },
    ],
  },
];
