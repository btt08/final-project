import CardCpus from "./CardCpus"
import cpus from '../db/cpus'

const Content = () => {
  return (
    <section className="products">
      {cpus.map((cpu, index) => {
        return <CardCpus key={index} cpu={cpu} />
      })}
    </section>
  )
}
export default Content