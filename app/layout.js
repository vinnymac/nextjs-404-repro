import React, { version as reactVersion } from 'react';
import { Metadata } from 'next';

import packageJSON from 'package.json';

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <p>The header of the page was rendered by the root layout.</p>
          <p>
            The current version of React is <strong>{reactVersion}</strong>.
          </p>
          <p>
            The current version of NextJS is <strong>{packageJSON['dependencies']['next']}</strong>
          </p>
        </header>
        <main>{children}</main>
        <footer>
          <p>The footer of the page was rendered by the root layout.</p>
        </footer>
      </body>
    </html>
  );
}
