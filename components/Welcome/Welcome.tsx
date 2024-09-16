// @ts-nocheck

import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        JeffCo{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink.7', to: 'cyan.5' }}>
          Mountain Bikers
        </Text>
      </Title>
      <Text ta="center" size="xl" maw={600} mx="auto" mt="xl">
      Hi! We're Jefferson County Mountain Bikers.
      We're an informal group of mountain bikers who ride every Tuesday
      night from mid-March to early November. Most rides are in Golden, CO,
      but we also ride in other areas relatively close to Denver, CO.
      Find our  {' '}
      <Anchor href="#rides" size="lg">
      ride schedule
      </Anchor>
      {' '}
      below or read more about us
      {' '}
      <Anchor href="#faq" size="lg">
      here
      </Anchor>.
      </Text>
    </>
  );
}
