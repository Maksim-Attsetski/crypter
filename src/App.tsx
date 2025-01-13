import React from 'react';
import { Navigation } from 'features/components';
import { BrowserRouter } from 'react-router';
import { MessageProvider } from 'features/hoc';

function App() {
  return (
    <BrowserRouter>
      <MessageProvider>
        <Navigation />
      </MessageProvider>
    </BrowserRouter>
  );
}

export default App;
