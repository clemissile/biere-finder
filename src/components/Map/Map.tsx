import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { Bar } from "src/types/Bar";

type MapProps = {
  bars: Bar[] | null;
  setClickedBar: (bar: Bar | null) => void;
};

export const Map = (props: MapProps) => {
  const { bars, setClickedBar } = props;
  const position: LatLngExpression = [49.1723, -0.3709];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="map"
      doubleClickZoom
      touchZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {bars &&
        bars.map((bar) => {
          return (
            <Marker
              key={bar.id}
              position={bar.latlon}
              eventHandlers={{
                click: () => {
                  setClickedBar(bar);
                },
              }}
            />
          );
        })}
    </MapContainer>
  );
};
