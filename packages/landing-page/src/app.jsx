import React from 'react';
import Header from './Header'
import Footer from 'main_page/Footer';

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