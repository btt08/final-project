import { memo } from 'react'
import { useContext } from 'react';
import DataContext from '../context/dataContext';
import { FaBorderAll, FaMicrochip, FaGreaterThan } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import gpuIcon from '../assets/gpu-icon.png'

const CategoriesList = memo(() => {
  const { cat, setCat, setPageNum } = useContext(DataContext);

  return (
    <section className="cat-list">
      <ul>
        <li className={cat === '' ? 'active' : ''}
          onClick={() => { setPageNum(1); setCat(''); }}>
          <FaBorderAll />
          <p>Todas Categorías</p>
          <FaGreaterThan />
        </li>
        <li className={cat === 'gpu' ? 'active' : ''}
          onClick={() => { setPageNum(1); setCat('gpu') }}>
          <img src={gpuIcon} alt='' />
          <p>Tarjetas Gráficas</p>
          <FaGreaterThan />
        </li>
        <li className={cat === 'cpu' ? 'active' : ''}
          onClick={() => { setPageNum(1); setCat('cpu') }}>
          <FaMicrochip />
          <p>Procesadores</p>
          <FaGreaterThan />
        </li>
        <li className={cat === 'smartphone' ? 'active' : ''}
          onClick={() => { setPageNum(1); setCat('smartphone') }}>
          <FiSmartphone />
          <p>Smartphones</p>
          <FaGreaterThan />
        </li>
      </ul>
    </section>
  )
})
export default CategoriesList