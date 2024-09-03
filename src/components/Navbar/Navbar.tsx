import { Bar } from "src/types/Bar";
import classes from "./Navbar.module.css";
import { Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

type NavbarProps = {
  bars: Bar[] | null;
  clickedBar: Bar | null;
  triggerVisibility: boolean;
  setTriggerVisibility: (bool: boolean) => void;
};

export const Navbar = (props: NavbarProps) => {
  const { bars, clickedBar, triggerVisibility, setTriggerVisibility } = props;

  return (
    <nav
      className={`${classes.navbar} ${
        triggerVisibility ? classes.show : classes.hide
      }`}
    >
      <Button
        variant="light"
        radius="xl"
        size="md"
        onClick={() => setTriggerVisibility(false)}
      >
        <IconChevronRight />
      </Button>

      <div className={classes.navbarMain}>
        {bars &&
          bars.map((bar) => (
            <p key={bar.id}>
              {clickedBar && bar.id === clickedBar.id ? (
                <b>{bar.nom}</b>
              ) : (
                bar.nom
              )}
            </p>
          ))}
      </div>

      <div className={classes.footer}>
        <a
          href="https://olinalab.fr"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <span>{new Date().getFullYear()} &mdash; &copy; Olina Lab</span>
        </a>
      </div>
    </nav>
  );
};
