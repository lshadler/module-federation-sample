import React from 'react';

export function Header() {
    return <h1>My Cool Site</h1>;
}

export default function LandingPage() {
  return (
      <>
        <Header />
        <h1>Hello from Landing Page!</h1>
        <a href="http://localhost:3001">Go to main page</a>
      </>
  );
}