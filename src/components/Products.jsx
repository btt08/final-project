import Card from './Card';

export const Products = ({ data }) => {
  return (
    <div className="products">
      {data.error && <p>No hay resultados</p>}
      {!data.error && data.map((product, index) => {
        return <Card key={index} product={product} />
      })}
    </div>
  )
}