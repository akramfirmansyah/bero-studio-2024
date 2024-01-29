import { Box, Heading, Text } from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <Box>
      <Heading>About Page</Heading>
      <Text>Desc About</Text>
    </Box>
  );
}
