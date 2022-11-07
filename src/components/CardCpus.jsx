import NAImage from '../assets/NA.jpg'
import IntelLogo from '../assets/intel-logo.png'

const CardCpus = ({ cpu }) => {

  /*
    {
    'id': '_I11700T',
    'manufacturer': 'INTEL',
    'model': '11700T',
    'socket': 'LGS1200',
    'cores': '8C/16T',
    'baseFrequency': '1.4GHZ',
    'maxFrequency': '4.6GHZ',
    'igpu': true,
    'price': 355
  }
  */
  return (
    <div className="card cpus">
      <div className="manufacturer">
        <img src={IntelLogo} alt="Manufacturer logo" className='brand-logo' />
        <p>{cpu.manufacturer}</p>
      </div>
      <img src={NAImage} alt="Product logo" className='product-image' />
      <p className='product-name'>{`${cpu.manufacturer} ${cpu.model}`}</p>
      <div className='price-listing'>
        <p className='product-price'>{`${cpu.price}€`}</p>
        <button className='btn btn-details'>Detalles</button>
      </div>
    </div>
  )
}
export default CardCpus