import { Bar } from "src/types/Bar";

export const findBeers = (search: string): Bar[] => {
  const searchLower = search.toLowerCase();

  // Filtrer les bars
  return barsData.filter((bar) =>
    bar.bieres.some(
      (biere) =>
        biere.nom.toLowerCase().includes(searchLower) ||
        biere.type.toLowerCase().includes(searchLower)
    )
  );
};

export const barsData: Bar[] = [
  {
    id: 1,
    nom: "La Rhumba",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNVZyiZvrcmuA5B7dgMDj_4KnmgZePiKBwXgSxs=s680-w680-h510",
    latlon: [49.182053153144416, -0.3683148181555217],
    bieres: [
      {
        nom: "Francette",
        type: "Blonde",
        degre: 5,
        pays: "FR",
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
        pays: "BE",
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
        pays: "BE",
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
        pays: "BE",
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
        pays: "BE",
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
        pays: "BE",
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
        pays: "BE",
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
        pays: "FR",
        prix: {
          demi: 3.9,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Embuscade",
        type: "",
        degre: 1000,
        pays: "normandy",
        prix: {
          demi: 4,
          pinte: 8,
          litre: 15,
        },
      },
    ],
  },
  {
    id: 2,
    nom: "Le Cristal",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO5RJ8ZD3YT6AHACLBqNnWxKi9RM0eWStGf-m2V=s680-w680-h510",
    latlon: [49.1832359, -0.3681452],
    bieres: [
      {
        nom: "Campus",
        type: "Blonde",
        degre: 5,
        pays: "BE",
        prix: {
          demi: 3.5,
          pinte: 6.5,
        },
      },
      {
        nom: "Blanche des neiges",
        type: "Blanche",
        degre: 4.9,
        pays: "BE",
        prix: {
          demi: 4,
          pinte: 7.5,
        },
      },
      {
        nom: "JI IPA",
        type: "IPA",
        degre: 6.2,
        pays: "BE",
        prix: {
          demi: 4.5,
          pinte: 8.5,
        },
      },
      {
        nom: "Saint Idesbald",
        type: "Blonde",
        degre: 6.5,
        pays: "BE",
        prix: {
          demi: 4,
          pinte: 7.5,
        },
      },
      {
        nom: "Embuscade",
        type: "",
        degre: 1000,
        pays: "normandy",
        prix: {
          demi: 5.5,
          pinte: 10,
        },
      },
    ],
  },
  {
    id: 3,
    nom: "L'Hydropathe",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOCg8VDtCDbtEtJgAe9vt78LuK699Zdo_iE83Q=s680-w680-h510",
    latlon: [49.1816373, -0.3668117],
    bieres: [
      {
        nom: "Francette",
        type: "Blonde",
        degre: 5,
        pays: "FR",
        prix: {
          demi: 3.5,
          pinte: 6.5,
          litre: 12,
        },
      },
      {
        nom: "Saint Idesbald",
        type: "Blonde",
        degre: 6.5,
        pays: "BE",
        prix: {
          demi: 4,
          pinte: 7.5,
          litre: 14,
        },
      },
      {
        nom: "Blanche des neiges",
        type: "Blanche",
        degre: 4.9,
        pays: "BE",
        prix: {
          demi: 3.5,
          pinte: 6.5,
          litre: 12,
        },
      },
      {
        nom: "Yperman",
        type: "Blonde",
        degre: 5.5,
        pays: "BE",
        prix: {
          demi: 4.5,
          pinte: 8.5,
          litre: 16,
        },
      },
      {
        nom: "Vedett IPA",
        type: "IPA",
        degre: 6,
        pays: "BE",
        prix: {
          demi: 4.5,
          pinte: 8.5,
          litre: 16,
        },
      },
    ],
  },
];
