import { Container, Button, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderMenu.module.css";
import { Bar } from "src/types/Bar";

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
          <MantineLogo size={28} />
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
