import { addDays, addHours, format, isBefore, isEqual, nextTuesday } from 'date-fns';
import { Anchor, Badge, Box, Title } from '@mantine/core';
import { RIDE_SCHEDULE } from '@/constants';
import styles from './Schedule.module.css';

type RideData = {
    date?: string;
    trail?: string;
    slug?: string;
    startTime?: string;
};

function pairStringsWithDates(strings: { trail: string; startTime: string }[]): RideData[] {
    const dstStart = new Date(2026, 2, 9); // March 9, 2026
    const dstEnd = new Date(2026, 10, 2); // November 2, 2026

    let currentDate = nextTuesday(dstStart);
    const endDate = nextTuesday(dstEnd);

    const result: RideData[] = [];
    let stringIndex = 0;

    while (isBefore(currentDate, endDate) || isEqual(currentDate, endDate)) {
        const rideData: RideData = {};
        const dateString = format(currentDate, 'MM-dd-yy');
        const stringToPair = strings[stringIndex].trail ?? '[No more strings]';

        rideData.date = dateString;
        rideData.startTime = strings[stringIndex].startTime;
        rideData.trail = stringToPair;
        rideData.slug = stringToPair.toLowerCase().replace(/\s/g, '-');

        currentDate = addDays(currentDate, 7);
        stringIndex += 1;

        if (isEqual(currentDate, addDays(endDate, 7)) && stringIndex < strings.length) {
            currentDate = nextTuesday(dstStart);
        }

        result.push(rideData);
    }

    return result;
}
export function Schedule() {
  const pairedResults = pairStringsWithDates(RIDE_SCHEDULE);

  return (
    <div>
       <Title id="all-rides" mt={60} size={60} ta="center">Full {new Date().getFullYear()} Schedule</Title>
      <div>
        {pairedResults.map((item, index) => {
          const dateParts = item.date ? item.date.split('-') : null;
          const eventDate = dateParts
            ? new Date(
                2000 + parseInt(dateParts[2], 10),
                parseInt(dateParts[0], 10) - 1,
                parseInt(dateParts[1], 10)
              )
            : null;

          // Parse the time and add it to the event date
          const timeString = item.startTime || '';
          const isPM = timeString.toLowerCase().includes('pm');
          const timeParts = timeString.replace(/am|pm/i, '').split(':');

          if (eventDate && timeParts.length > 0) {
            let hours = parseInt(timeParts[0], 10);
            if (isPM && hours < 12) hours += 12;
            eventDate.setHours(hours);
            eventDate.setMinutes(parseInt(timeParts[1] || '0', 10));
          }

          // Keep showing the event as active for 4 hours after it started
          const fourHoursAfterEvent = eventDate ? addHours(eventDate, 4) : null;
          const now = new Date();
          const pastEvent = fourHoursAfterEvent ? fourHoursAfterEvent < now : false;

          return (
            <Box mb={5} key={index} opacity={pastEvent ? 0.6 : 1}>
              <Anchor
                className={styles.groupRide}
                href={`/group-rides/${item.slug}`}
              >{item.date} | {item.startTime} ➔ {item.trail}
              {pastEvent && <Badge ml={5} color="blue">Past</Badge>}
              </Anchor>
            </Box>
          );
})}
      </div>
    </div>
  );
}
