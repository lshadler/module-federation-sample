import React, { useState } from 'react';
import { System } from './dynamicRemoteUtils';
import Footer from 'components/Footer'

export default function MainPage() {
  const [system, setSystem] = useState(undefined);
  const setFooterSystem = () => {
    setSystem({
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'components',
      module: './Footer'
    })
  }
  const setHeaderSystem = () => {
    setSystem({
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'components',
      module: './Header'
    })
  }
  return (
      <>
        <h1>Hello from Main Page!</h1>
        <p>React version: {React.version}</p>
        <Footer />
        <a href="http://localhost:3002">Go to landing page</a>
        <button onClick={setFooterSystem}>Load Footer</button>
        <button onClick={setHeaderSystem}>Load Header</button>
        <System system={system} />
      </>
  );
}