import { Title, Text } from '@mantine/core';

export function Contact() {
  return (
    <div>
      <Title mt={90} size={60} ta="center">Contact Us</Title>
        <Text mb={10} ta="center">For general questions, email us at <a href="mailto:hello@jeffcomtb.club">hello@jeffcomtb.club</a></Text>
        <Text mb={10} ta="center">Please submit complaints <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">here</a></Text>
    </div>
  );
}
