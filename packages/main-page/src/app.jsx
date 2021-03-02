import React from 'react';

export function Footer() {
    return <p>Brought to you by Module Federation!</p>
}

export default function MainPage() {
  return (
      <>
        <h1>Hello from Main Page!</h1>
        <a href="http://localhost:3002">Go to landing page</a>
        <Footer />
      </>
  );
}