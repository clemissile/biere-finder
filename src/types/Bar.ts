import { LatLngExpression } from "leaflet";

export type Bar = {
  id: number;
  nom: string;
  image: string;
  latlon: LatLngExpression;
  bieres: Biere[];
};

export type Biere = {
  nom: string;
  type: string;
  degre: number;
  prix?: Prix;
  pays: string;
};

export type Prix = {
  demi?: number;
  pinte?: number;
  litre?: number;
};
