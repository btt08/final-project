import { memo } from 'react'
import { FaBorderAll, FaMicrochip, FaUserFriends, FaGreaterThan } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import gpuIcon from '../assets/gpu-icon.png'

const CategoriesList = memo(() => {
  return (
    <section className="cat-list">
      <ul>
        <li className='active'>
          <FaBorderAll />
          <p>Todas Categorías</p>
          <FaGreaterThan />
        </li>
        <li>
          <img src={gpuIcon} alt='' />
          <p>Tarjetas Gráficas</p>
          <FaGreaterThan />
        </li>
        <li>
          <FaMicrochip />
          <p>Procesadores</p>
          <FaGreaterThan />
        </li>
        <li>
          <FiSmartphone />
          <p>Smartphones</p>
          <FaGreaterThan />
        </li>
        <li>
          <FaUserFriends />
          <p>Fabricantes</p>
          <FaGreaterThan />
        </li>
      </ul>
    </section>
  )
})
export default CategoriesList