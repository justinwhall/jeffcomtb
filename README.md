
## Getting started

**Node Version :**  20.X.X

1. Clone repo
2. `npm ci`
3. `npm run dev`

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

## Changing the ride schedule

The ride schedule is the `RIDE_SCHEDULE` array in [constants.ts](constants.ts). Each entry is assigned to one Tuesday in the season: the **array index** is the **Tuesday number** (first Tuesday of the season = index 0, second = index 1, and so on through the DST season).

**Example:** The ride at index 0 is the first Tuesday; the ride at index 4 is the fifth Tuesday. Swap those two entries to swap which trail is on the first vs. fifth Tuesday.

## Deploying

Simple! Merging to main deploys the website to vercel.

