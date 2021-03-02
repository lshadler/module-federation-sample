import React from 'react';
import Footer from './Footer';
import Header from 'landing_page/Header';


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