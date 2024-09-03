import {
  TextInput,
  ActionIcon,
  useMantineTheme,
  rem,
  Button,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import "./Search.css";

type SearchModuleProps = {
  setSearch: (value: string) => void;
  performSearch: () => void;
  close: (bool: boolean) => void;
};

export const SearchModule = (props: SearchModuleProps) => {
  const { setSearch, performSearch, close } = props;
  const theme = useMantineTheme();

  return (
    <>
      <div className="blurred-background"></div>
      <div className="overlay">
        <div className="container">
          <p>
            Taper le nom de votre bière favorite et trouver les bars caennais
            qui la propose !
          </p>
          <TextInput
            radius="xl"
            size="md"
            placeholder="Taper votre recherche"
            style={{ width: rem(400) }}
            rightSectionWidth={42}
            leftSection={
              <IconSearch
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") performSearch();
            }}
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
                onClick={performSearch}
              >
                <IconArrowRight
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          />

          <Button
            variant="light"
            radius="xl"
            size="md"
            styles={{ root: { marginTop: 20 } }}
            onClick={() => {
              close(false);
            }}
          >
            Voir la carte sans recherche
          </Button>
        </div>
      </div>
    </>
  );
};
