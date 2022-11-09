import { SortingForm } from "./SortingForm"
import { Pagination } from "./Pagination"
import { Products } from "./Products"

const Content = ({ data, pageData, pageNum, setPageNum }) => {
  return (
    <section className="content">
      <SortingForm />
      <Products data={data} />
      <Pagination pageData={pageData} pageNum={pageNum} setPageNum={setPageNum} />
    </section>
  )
}
export default Content