import React from 'react';
import './asset/style/mainStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/nav/sidebar';
import InfoBitcoin from './pages/infoBTC';
import IDRBitcoin from './pages/idrToBTC';
import BitcoinIDR from './pages/btcToIDR';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={InfoBitcoin} />
        <Route path="/info_bitcoin" component={InfoBitcoin} />
        <Route path="/idr_to_btc" component={IDRBitcoin} />
        <Route path="/btc_to_idr" component={BitcoinIDR} />
        <Route component={InfoBitcoin} />
      </Switch>
    </Router>
  );
}

export default App;
