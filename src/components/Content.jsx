import { SortingForm } from "./SortingForm"
import { Pagination } from "./Pagination"
import { Products } from "./Products"
import { useContext } from 'react';
import DataContext from '../context/dataContext';
import { SpinnerCircular } from 'spinners-react';

const Content = () => {
  const spinnerStyle = {
    width: '5rem',
    height: '5rem',
    margin: '5rem auto'
  };
  const { isLoading } = useContext(DataContext);

  return (
    <section className="content">
      <SortingForm />
      <Pagination />
      {isLoading && <SpinnerCircular style={spinnerStyle} />}
      {!isLoading && <Products />}
    </section>
  )
}
export default Content