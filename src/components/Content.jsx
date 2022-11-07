import CardCpus from "./CardCpus"
import cpus from '../db/cpus'
import { SortingForm } from "./SortingForm"
import { Pagination } from "./Pagination"

const Content = () => {
  return (
    <section className="content">
      <SortingForm />
      <div className="products">
        {cpus.map((cpu, index) => {
          return <CardCpus key={index} cpu={cpu} />
        })}
      </div>
      <Pagination />
    </section>
  )
}
export default Content