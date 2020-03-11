import React, { useContext} from 'react';
import { observer } from 'mobx-react-lite';

import './App.css';

import Header from './components/Header';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';

import appContext from './stores/App';

const App = observer(() => {

  const appStore = useContext(appContext);

  return (
    <main className="app">
      <Header/>
      <InvoiceList/>
      {appStore.displayAddInvoiceForm && <InvoiceForm/>}
    </main>
  );
})

export default App;
