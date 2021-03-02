import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';


export default function MainPage() {
  return (
      <>
        <Header />
        <h1>Hello from Main Page!</h1>
        <a href="http://localhost:3002">Go to landing page</a>
        <Footer />
      </>
  );
}