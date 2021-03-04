import React from 'react';
import {version} from 'react/package.json'

import Footer from 'components/Footer';
import Header from 'components/Header';

export default function LandingPage() {
  return (
      <>
        <Header />
        <h1>Hello from Landing Page!</h1>
        <p>React version: {React.version}, requested {version}</p>
        <a href="http://localhost:3001">Go to main page</a>
        <Footer />
      </>
  );
}