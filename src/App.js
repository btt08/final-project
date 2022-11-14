import { DataProvider } from './context/dataContext';

import Searchbar from './components/Searchbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CategoriesList from './components/CategoriesList';
import Content from './components/Content';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Searchbar />
        <main className='main-content'>
          <CategoriesList />
          <Content />
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
