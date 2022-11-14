import { useContext } from 'react';
import DataContext from '../context/dataContext';
import Card from './Card';

export const Products = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="products">
      {data.error && <p>No hay resultados</p>}
      {!data.error && data.map((product, index) => {
        return <Card key={index} product={product} />
      })}
    </div>
  )
}