import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function LandingPage() {
  return (
      <>
        <Header />
        <h1>Hello from Landing Page!</h1>
        <a href="http://localhost:3001">Go to main page</a>
        <Footer />
      </>
  );
}