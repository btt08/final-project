import Card from './Card';

export const Products = ({ data }) => {
  return (
    <div className="products">
      {data.map((product, index) => {
        return <Card key={index} product={product} />
      })}
    </div>
  )
}