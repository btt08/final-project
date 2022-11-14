import { useContext } from 'react';
import DataContext from '../context/dataContext';

export const Pagination = () => {
  const { pageData, pageNum, setPageNum } = useContext(DataContext);
  const next = (e) => setPageNum(prev => prev === pageData.totalPages ? prev : ++prev);
  const prev = (e) => setPageNum(prev => prev === 1 ? prev : --prev);

  const pages = [];
  for (let i = 1; i <= pageData.totalPages; i++) {
    const btnElem =
      <li
        key={i}
        className={pageNum === i ? 'page-num current' : 'page-num'}
        onClick={(e) => setPageNum(+e.target.innerText)}
      >{i}</li>;
    pages.push(btnElem);
  }

  return (
    <div id="pagination">
      <button className="page-nav-btn" disabled={pageNum === 1} onClick={prev}> &lt;  </button>
      <ul className='pages'>
        {pages}
      </ul>
      <button className="page-nav-btn" disabled={pageNum === pageData.totalPages} onClick={next}> &gt;</button>
    </div>
  )
}
