import React from 'react';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Page 2',
};

/**
 * Proof of concept for a sub server component page in the app router.
 */
export default function Page2({
  searchParams,
}) {
  const { error, notFound: showNotFound } = searchParams;

  if (error) {
    throw new Error('Test Error in NextJS AppRouter - Please ignore');
  }

  if (showNotFound) {
    notFound();
  }

  return (
    <article>
      <p>Page 2</p>
    </article>
  );
}
