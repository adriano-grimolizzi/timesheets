import Table from './components/table/Table';

import "./i18n/i18n";
import './App.css';
import Header from './components/header/Header';

const App = () => (
  <div className='App'>
    <header className="App-header">
      <Header />
      <Table />
    </header>
  </div>
)

export default App;
