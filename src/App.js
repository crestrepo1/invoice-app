import React from 'react';
import { observer } from 'mobx-react-lite';

import {useStores} from './stores/';

import Header from './components/Header';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';

import './App.css';

const App = observer(() => {

  const { globalStore } = useStores();
  return (
    <main className="app">
      <Header/>
      <InvoiceList/>
      {globalStore.displayAddInvoiceForm && <InvoiceForm/>}
    </main>
  );
})

export default App;
