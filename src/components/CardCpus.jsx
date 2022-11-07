import NAImage from '../assets/NA.jpg'
import IntelLogo from '../assets/intel-logo.png'

const CardCpus = ({ cpu }) => {
  return (
    <article className="card cpus">
      <div className="manufacturer">
        <img src={IntelLogo} alt="Manufacturer logo" className='brand-logo' />
        <p>{cpu.manufacturer}</p>
      </div>
      <img src={NAImage} alt="Product logo" className='product-image' />
      <p className='product-name'>
        {`${cpu.model}`}
      </p>
      <div className='price-listing'>
        <p className='product-price'>
          {`${cpu.price}€`}
        </p>
        <button className='btn btn-details'>Detalles</button>
      </div>
    </article>
  )
}
export default CardCpus