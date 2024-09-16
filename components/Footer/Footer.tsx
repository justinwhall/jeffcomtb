import { Text, Box, Anchor } from '@mantine/core';

export function Footer() {
  return (
    <Box
      bg="dark.8"
      p={30}
      mt={90}
    >
        <Text
          color="dark.2"
          ta="center"
          fs="italic"
          size="sm"
          fw={700}
        >
          Website hastily built by {' '}
        <Anchor fw={800} href="https://justinwhall.com">http://justinwhall.com</Anchor>
        </Text>
    </Box>
  );
}
