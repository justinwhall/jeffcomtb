'use client';

import { Accordion, Title } from '@mantine/core';

const FAQs = [
  {
    emoji: '🤝',
    value: 'Are your rides open to everyone?',
    description:
      'We have no formal membership and rides are open to anyone but be aware of the following: 1) We are **Not** a beginner group. 2) While rides are social and fun, they are not "no drop". 3) There is no formal ride leader.',
  },
  {
    emoji: '🐢',
    value: 'Are your rides no drop?',
    description:
      'Generally, there is no formal sweep. Pace varies and we often break into smaller groups.',
  },
  {
    emoji: '🚲',
    value: 'Is there a ride leader?',
    description:
      'No, however most of us know the trails well.',
  },
  {
    emoji: '👕',
    value: 'Do you have matching jerseys or kits?',
    description:
      'We\'re a mountain bike group, not a synchronized swimming team. Wear whatever keeps you from getting arrested for public indecency.',
  },
  {
    emoji: '📸',
    value: 'Do you have ambassadors?',
    description:
    'Nope, this is a ride group, not a popularity contest. Leave your influencer dreams at home.',
  },
  {
    emoji: '🌧️',
    value: 'Do you ride in bad weather?',
    description:
      'We ride rain or shine. If you melt in water, you might want to stick to Zwift.',
  },
  {
    emoji: '🦮',
    value: 'Can I bring my dog?',
    description:
      'Only if your dog can outride half our group. And clean up after itself. And fetch beers.',
  },
  {
    emoji: '🍺',
    value: 'Free beer?',
    description: 'Actually, kinda. We have a cooler we pass around.',
  },
];

export function FAQ() {
  return (
    <div>
      <Title id="faq" mt={60} size={60} ta="center">FAQs</Title>
      <Accordion>
      {FAQs.map((faq) => (
        <Accordion.Item key={faq.value} value={faq.value}>
          <Accordion.Control icon={faq.emoji}>{faq.value}</Accordion.Control>
          <Accordion.Panel>{faq.description}</Accordion.Panel>
        </Accordion.Item>
      ))}
      </Accordion>
    </div>
  );
}
