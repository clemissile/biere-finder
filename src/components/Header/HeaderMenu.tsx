import { Container, Button, Image, Title, rem, Group } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import { Bar } from "src/types/Bar";
import logo from "src/assets/images/icon-512.png";

type HeaderMenuProps = {
  setBars: (bars: Bar[] | null) => void;
  setVisible: (bool: boolean) => void;
};

export const HeaderMenu = (props: HeaderMenuProps) => {
  const { setBars, setVisible } = props;

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Group>
            <Image radius="md" w={28} src={logo} />
            <Title size="h4">Biere Finder</Title>
          </Group>
          <Button
            variant="light"
            radius="xl"
            size="md"
            onClick={() => {
              setBars(null);
              setVisible(true);
            }}
          >
            <IconSearch
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </Button>
        </div>
      </Container>
    </header>
  );
};
