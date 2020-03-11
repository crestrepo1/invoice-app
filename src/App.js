import React from 'react';
import './App.css';

import Header from './components/Header';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <main className="app">
      <Header/>
      <InvoiceList/>
      <InvoiceForm/>
    </main>
  );
}

export default App;
