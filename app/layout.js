import React, { version as reactVersion } from 'react';

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
        </header>
        <main>{children}</main>
        <footer>
          <p>The footer of the page was rendered by the root layout.</p>
        </footer>
      </body>
    </html>
  );
}
