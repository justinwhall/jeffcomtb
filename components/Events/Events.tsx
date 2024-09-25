import { Box, Button, Title } from '@mantine/core';
import classes from './Events.module.css';
import { formatDate } from '@/utils';

export async function Events() {
  const res = await fetch('https://vite.bike/api/strava/jeffco-events');
  const events = await res.json();

  const parseDescription = (description:string) => {
    const regex = /https:\/\/jeffcomtb\.club\/directions\/[\w\-?=&#.%]*/;
    const match = description.match(regex);
    const link = match ? match[0] : '';

    const descriptionWithLink = description.replace(link, `<a href="${link}" target="_blank">Directions</a>`);
    return descriptionWithLink.replace(/\n/g, '<br />');
  };

  const now = new Date();
  const filteredEvents = events.filter((event: any) => {
    const upcomingOccurrence = new Date(event.upcoming_occurrences[0]);
    return upcomingOccurrence > now;
  });

  return (
    <>
      <Title mt={60} size={60} ta="center">Group Rides</Title>
      <Box mt={20}>
        {filteredEvents.map((event: any) => (
          <Box key={event.id} mb={30} p={10} className={classes.event}>
            <Title
              id="rides"
              order={3}
              size={40}
              style={{
                color: 'var(--mantine-color-cyan-4)',
              }}
            >
              {event.title}
            </Title>
            <Box fw={800}>{formatDate(event.upcoming_occurrences[0])}</Box>
            <Box mb={20}><Box display="inline-block" mr={5} fw={800}>Meeting Location:</Box>{event.address}</Box>
            <Button component="a" mr={10} href={`https://www.strava.com/clubs/${event.club_id}/group_events/${event.id}`} target="_blank">RSVP on Strava</Button>
            <Box
              className={classes.description}
              mt={30}
              dangerouslySetInnerHTML={{ __html: parseDescription(event.description) }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}
