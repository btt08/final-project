import { memo } from 'react';
import { useForm } from 'react-hook-form'

export const SortingForm = memo(() => {
  const { register, handleSubmit } = useForm();

  return (
    <form id='sorting-form' onSubmit={(e => e.preventDefault())}
    // onSubmit={handleSubmit((data) => {
    //   setFilters({
    //     ...filters,
    //     sort: {
    //       field: data.field,
    //       order: data.order
    //     }
    //   })
    // })}
    >
      <select {...register('field')}
      // defaultValue={filters.sort.field}
      >
        <option value={'brand'}>Modelo</option>
        <option value={'manufacturer'}>Fabricante</option>
        <option value={'price'}>Precio</option>
      </select>

      <select {...register('order')}
      // defaultValue={filters.sort.order}
      >
        <option value={'ASC'}>Ascendente</option>
        <option value={'DESC'}>Descendente</option>
      </select>
      <button className='btn btn-sort'>Ordenar</button>
    </form >
  )
})