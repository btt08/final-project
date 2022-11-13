import { FaSearch, FaBars, FaChevronDown } from 'react-icons/fa'
import profileImage from '../assets/profile.png'

const Searchbar = ({ search, setSearch, setCat }) => {
  const handleChange = (e) => {
    setCat('');
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
      <div className='user-profile'>
        <img src={profileImage} alt='Imagen de perfil' />
        <p>Nombre Persona</p>
        <FaChevronDown />
        {/* <button className='button login'>Entrar</button>
        <button className='button signin'>Registrarse</button> */}
      </div>
    </div>
  )
}
export default Searchbar