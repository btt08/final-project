import { DataProvider } from './context/dataContext';
import { useContext } from 'react';
import DataContext from './context/dataContext';
import { SpinnerCircular } from 'spinners-react';
import Searchbar from './components/Searchbar';
import './App.css';
import CategoriesList from './components/CategoriesList';
import Content from './components/Content';

function App() {
  const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    margin: 'auto'
  };

  const { isLoading } = useContext(DataContext);

  return (
    <div className="App">
      <DataProvider>
        <Searchbar />
        <main className='main-content'>
          <CategoriesList />
          {isLoading && <SpinnerCircular style={spinnerStyle} />}
          {!isLoading && <Content />}
        </main>
      </DataProvider>
    </div>
  );
}

export default App;
