import cpus from './db/cpus'
import gpus from './db/gpus'
import smartphones from './db/smartphones'
import manufacturers from './db/manufacturers'
import Searchbar from './components/Searchbar'
import './App.css';
import CategoriesList from './components/CategoriesList'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Searchbar />
      <main className='main-content'>
        <CategoriesList />
        <Content />
      </main>
    </div>
  );
}

export default App;
