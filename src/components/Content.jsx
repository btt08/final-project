import { SortingForm } from "./SortingForm"
import { Pagination } from "./Pagination"
import { Products } from "./Products"

const Content = ({ data, pageData, pageNum, setPageNum, sort, setSort }) => {
  return (
    <section className="content">
      <SortingForm sort={sort} setSort={setSort} />
      <Products data={data} />
      <Pagination pageData={pageData} pageNum={pageNum} setPageNum={setPageNum} />
    </section>
  )
}
export default Content