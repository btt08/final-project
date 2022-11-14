import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cat, setCat] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState([['model', 'asc']]);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pageNum, cat, search, sort]);

  return (
    <DataContext.Provider value={{
      data, pageData,
      pageNum, setPageNum,
      sort, setSort,
      search, setSearch,
      cat, setCat,
      isLoading
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;