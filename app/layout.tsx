import '@mantine/core/styles.css';
import './global.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'JeffCo Mountain Bikers | Golden, CO, Jefferson County, CO | Mountain Bike Group Rides',
  description: 'Golden, CO, Jefferson, CO and Denver, CO mountain bike group rides. Join us for weekly group rides in the Golden, CO area.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {/* og image tag */}
        <meta property="og:image" content="https://jeffcomtb.club/og.jpg" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
