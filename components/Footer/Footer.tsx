import {
  Group,
  Stack,
  Button,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Pages } from "../../utils/pages";
import { useMediaQuery } from "@mantine/hooks";
import { FooterMobile } from "./FooterMobile";
interface FooterProps {
  setSection: (section: string) => void;
}
const style = {
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
};
export function Footer({ setSection }: FooterProps) {
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const items = Pages.map((sec, index) => (
    <Button key={index} onClick={() => setSection(sec.id)} style={style}>
      {sec.name}
    </Button>
  ));
  return maxW ? (
    <FooterMobile setSection={setSection} />
  ) : (
    <Stack
      w={{ base: "intitial", lg: theme.breakpoints.lg }}
      left={0}
      right={0}
      mx="auto"
      px={{ base: 16, lg: 0 }}
    >
      <Group wrap="nowrap" justify="space-between">
        <Button style={style} onClick={() => setSection("Home")}>
          <Image src="/assets/LogoOrange.svg" h="32"></Image>
        </Button>
        <Group>{items}</Group>
        <Group>
          <Button style={style}>
            <Image src="/assets/instragram.png" h="20"></Image>
          </Button>
          <Button style={style}>
            <Image src="/assets/linkedin.png" h="20"></Image>
          </Button>
        </Group>
      </Group>
      <Group
        style={{ borderTop: "var(--mantine-color-white-2) 1px solid" }}
        py="sm"
      >
        <Text fz="sm">@2024 Gimage, All rights reserved</Text>
      </Group>
    </Stack>
  );
}
