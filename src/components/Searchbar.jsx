import { useContext } from 'react';
import DataContext from '../context/dataContext';

import { FaSearch, FaBars } from 'react-icons/fa'

const Searchbar = () => {
  const { search, setSearch, setCat } = useContext(DataContext);

  const handleChange = (e) => {
    setCat(prev => prev !== '' ? '' : prev);
    setSearch(e.target.value);
  };

  return (
    <div className='searchbar'>
      <div className='categories'>
        <FaBars />
        <p>Categorías</p>
      </div>
      <form className='search'
        onSubmit={(e) => e.preventDefault()}>
        <FaSearch />
        <input type="text"
          value={search}
          onChange={handleChange}
          placeholder="Introduce términos de búsqueda" />
        <button className='button search-btn'
          type="submit">
          Buscar
        </button>
      </form>
    </div>
  )
}
export default Searchbar