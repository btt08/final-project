import { SortingForm } from "./SortingForm"
import { Pagination } from "./Pagination"
import { Products } from "./Products"

const Content = () => {
  return (
    <section className="content">
      <SortingForm />
      <Products />
      <Pagination />
    </section>
  )
}
export default Content