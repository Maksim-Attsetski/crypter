import React from 'react';
import { Navigation } from 'features/components';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
