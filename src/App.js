import axios from 'axios';
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar'
import './App.css';
import CategoriesList from './components/CategoriesList'
import Content from './components/Content'

function App() {

  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/cpus?page=${pageNum}`);
        if (!response.data.error) {
          setData(response.data.results);
          setPageData({
            hasPrevPage: response.data.hasPrevPage,
            hasNextPage: response.data.hasNextPage,
            totalPages: response.data.totalPages
          });
        }
        else
          console.log(response.data.error)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [pageNum]);

  return (
    <div className="App">
      <Searchbar />
      <main className='main-content'>
        <CategoriesList />
        <Content data={data} pageData={pageData} pageNum={pageNum} setPageNum={setPageNum} />
      </main>
    </div>
  );
}

export default App;
