import { LatLngExpression } from "leaflet";

export type Bar = {
  id: number;
  nom: string;
  latlon: LatLngExpression;
  bieres: Biere[];
};

export type Biere = {
  nom: string;
  type: string;
  degre: number;
  prix?: Prix;
};

export type Prix = {
  demi?: number;
  pinte?: number;
  litre?: number;
};
