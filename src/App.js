import React from 'react';
import { observer } from 'mobx-react-lite';

import Header from './components/Header';
import InvoiceList from './components/InvoiceList';

import './App.css';

const App = observer(() => {

  return (
    <main className="app">
      <Header/>
      <InvoiceList/>
    </main>
  );
})

export default App;
