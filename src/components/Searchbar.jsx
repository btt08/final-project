import { FaSearch, FaBars, FaChevronDown } from 'react-icons/fa'
import profileImage from '../assets/profile.png'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className='categories'>
        <FaBars />
        <p>Categorías</p>
      </div>
      <div className='search'>
        <FaSearch />
        <input type="text" placeholder="Introduce términos de búsqueda" />
        <button className='btn search-btn' type="submit">
          Buscar
        </button>
      </div>
      <div className='user-profile'>
        <img src={profileImage} alt='Imagen de perfil' />
        <p>Nombre Persona</p>
        <FaChevronDown />
        {/* <button className='btn login'>Entrar</button>
        <button className='btn signin'>Registrarse</button> */}
      </div>
    </div>
  )
}
export default Searchbar