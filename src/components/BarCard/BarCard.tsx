import { Card, Image, Text, Group, Badge, Tooltip } from "@mantine/core";
import classes from "./BarCard.module.css";
import { Bar } from "src/types/Bar";
import ReactCountryFlag from "react-country-flag";
import normandy from "src/assets/images/normandy.svg";

type BarCardProps = {
  active: boolean;
  bar: Bar;
};

export const BarCard = (props: BarCardProps) => {
  const { active, bar } = props;
  const features = bar.bieres.map((biere) => {
    const tooltip = `${biere.prix?.demi}€ demi / ${biere.prix?.pinte}€ pinte`;

    const flag =
      biere.pays === "normandy" ? (
        <Image w={11} src={normandy} style={{ display: "inline-block" }} />
      ) : (
        <ReactCountryFlag svg countryCode={biere.pays} />
      );

    const type = biere.type === "" ? null : `(${biere.type})`;

    return (
      <Tooltip label={tooltip} className={classes.tooltip} key={biere.nom}>
        <Badge className={classes.badge} variant="light">
          {flag} {biere.nom} {type}
        </Badge>
      </Tooltip>
    );
  });

  return (
    <Card
      withBorder
      radius="md"
      p="xs"
      my="xs"
      className={`${classes.card} ${active ? classes.active : ""}`}
    >
      <Card.Section>
        <Image src={bar.image} alt={bar.nom} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Text fz="lg" fw={500}>
          {bar.nom}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Bières
        </Text>
        <Group gap={3} mt={3}>
          {features}
        </Group>
      </Card.Section>

      {/* <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group> */}
    </Card>
  );
};
