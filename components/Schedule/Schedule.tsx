import { format, addDays, nextTuesday, isBefore, isEqual } from 'date-fns';
import Link from 'next/link';
import { RIDE_SCHEDULE } from '@/constants';

type RideData = {
    date?: string;
    trail?: string;
    slug?: string;
};

function pairStringsWithDates(strings: string[]) {
    const dstStart = new Date(2024, 2, 10); // March 10, 2024
    const dstEnd = new Date(2024, 10, 3); // November 3, 2024

    let currentDate = nextTuesday(dstStart);
    const endDate = nextTuesday(dstEnd);

    const result = [];
    let stringIndex = 0;

    while (isBefore(currentDate, endDate) || isEqual(currentDate, endDate)) {
        const rideData:RideData = {};
        const dateString = format(currentDate, 'MM-dd-yyyy');
        const stringToPair = strings[stringIndex] || '[No more strings]';

        rideData.date = dateString;
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
      <h2>Schedule</h2>
      <ul>
        {pairedResults.map((item, index) => (
            <li key={index}>
              <Link href={`/group-rides/${item.slug}`}>{item.date} ➔ {item.trail}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
