'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
      <button onClick={() => router.push('/poc/appRouter')}>Return to App Router Page</button>
    </div>
  );
}
