import { memo } from 'react';
import { useContext } from 'react';
import DataContext from '../context/dataContext';
import { useForm } from 'react-hook-form'

export const SortingForm = memo(() => {
  const { register, handleSubmit } = useForm();
  const { sort, setSort, setPageNum } = useContext(DataContext);
  return (
    <form id='sorting-form'
      onSubmit={handleSubmit((data) => {
        setPageNum(1);
        setSort([[data.field, data.order]]);
      })}
    >
      <select {...register('field')}
        defaultValue={sort[0][0]}
      >
        <option value={'model'}>Marca</option>
        <option value={'price'}>Precio</option>
      </select>

      <select {...register('order')}
        defaultValue={sort[0][1]}
      >
        <option value={'ASC'}>Ascendente</option>
        <option value={'DESC'}>Descendente</option>
      </select>
      <button type='submit' className='btn btn-sort'>Ordenar</button>
    </form >
  )
})