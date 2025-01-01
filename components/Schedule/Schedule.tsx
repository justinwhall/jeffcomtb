import { format, addDays, nextTuesday, isBefore, isEqual } from 'date-fns';
import { Anchor, Badge, Box, Title } from '@mantine/core';
import { RIDE_SCHEDULE } from '@/constants';
import styles from './Schedule.module.css';

type RideData = {
    date?: string;
    trail?: string;
    slug?: string;
    startTime?: string;
};

function pairStringsWithDates(strings: { trail: string, startTime: string }[]): RideData[] {
    const dstStart = new Date(2025, 2, 9); // March 10, 2024
    const dstEnd = new Date(2025, 10, 2); // November 3, 2024

    let currentDate = nextTuesday(dstStart);
    const endDate = nextTuesday(dstEnd);

    const result = [];
    let stringIndex = 0;

    while (isBefore(currentDate, endDate) || isEqual(currentDate, endDate)) {
        const rideData:RideData = {};
        const dateString = format(currentDate, 'MM-dd-yy');
        const stringToPair = strings[stringIndex].trail || '[No more strings]';

        rideData.date = dateString;
        rideData.startTime = strings[stringIndex].startTime;
        rideData.trail = stringToPair;
        rideData.slug = stringToPair.toLowerCase().replace(/\s/g, '-');

        currentDate = addDays(currentDate, 7); // Move to next Tuesday
        stringIndex += 1;

        if (isEqual(currentDate, addDays(endDate, 7)) && stringIndex < strings.length) {
            // If we've just passed the end date but still have strings, reset to the first date
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
          const pastEvent = item.date ? new Date(item.date) < new Date() : false;

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
