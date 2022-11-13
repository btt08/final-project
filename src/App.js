import axios from 'axios';
import { useState, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Searchbar from './components/Searchbar';
import './App.css';
import CategoriesList from './components/CategoriesList';
import Content from './components/Content';

function App() {

  const [cat, setCat] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState([['model', 'asc']]);

  const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    margin: 'auto'
  };

  useEffect(() => {
    const getProducts = async () => {
      let url = '/products';
      let end_url = `page=${pageNum}&field=${sort[0][0]}&order=${sort[0][1]}`;
      if (cat !== '' || search !== '') {
        if (search !== '') {
          url += `/search?q=${search}&${end_url}`;
          setPageNum(1);
        }
        if (cat !== '') {
          url += `/cat/${cat}?${end_url}`;
          setPageNum(1);
          setSearch('');
        }
      }
      else url += `?${end_url}`
      try {
        const response = await axios.get(`${url}`);
        if (!response.data.error) {
          setData(response.data.results);
          setPageData({
            hasPrevPage: response.data.hasPrevPage,
            hasNextPage: response.data.hasNextPage,
            totalPages: response.data.totalPages
          });
        }
        else
          setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    setIsLoading(true);
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [pageNum, cat, search, sort]);

  return (
    <div className="App">
      <Searchbar search={search} setSearch={setSearch} setCat={setCat} />
      <main className='main-content'>
        <CategoriesList cat={cat} setCat={setCat} />
        {isLoading && <SpinnerCircular style={spinnerStyle} />}
        {!isLoading &&
          <Content data={data} pageData={pageData} pageNum={pageNum} setPageNum={setPageNum} sort={sort} setSort={setSort} />}
      </main>
    </div>
  );
}

export default App;
