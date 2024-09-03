import { SearchModule } from "./components/Search/Search";
import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import { barsData, findBeers } from "./data/bars";
import { Bar } from "./types/Bar";
import { HeaderMenu } from "./components/Header/HeaderMenu";
import { Map } from "./components/Map/Map";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [bars, setBars] = useState<Bar[] | null>(barsData);
  const [clickedBar, setClickedBar] = useState<Bar | null>(null);
  const [searchVisible, setSearchVisible] = useState<boolean>(true);
  const [triggerVisibility, setTriggerVisibility] = useState<boolean>(false);

  const performSearch = () => {
    const res = findBeers(search);
    setBars(res);
    setSearchVisible(false);
    setTriggerVisibility(true);
  };

  const handleClickBar = (bar: Bar | null) => {
    setClickedBar(bar);
    setTriggerVisibility(true);
  };

  return (
    <MantineProvider forceColorScheme="dark">
      <HeaderMenu setBars={setBars} setVisible={setSearchVisible} />
      {searchVisible && (
        <SearchModule
          setSearch={setSearch}
          performSearch={performSearch}
          close={setSearchVisible}
        />
      )}
      <div className="map-container">
        <Map bars={bars} setClickedBar={handleClickBar} />
      </div>
      <Navbar
        bars={bars}
        clickedBar={clickedBar}
        triggerVisibility={triggerVisibility}
        setTriggerVisibility={setTriggerVisibility}
      />
    </MantineProvider>
  );
};

export default App;
