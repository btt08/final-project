import CardCpus from './CardCpus';

export const Products = ({ data }) => {
  return (
    <div className="products">
      {data.map((cpu, index) => {
        return <CardCpus key={index} cpu={cpu} />
      })}
    </div>
  )
}