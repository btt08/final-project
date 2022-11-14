import { useState } from 'react';

import DetailsModal from './DetailsModal'
import NAImage from '../assets/NA.jpg'
import IntelLogo from '../assets/intel-logo.png'
import amdLogo from '../assets/amd-logo.png'
import asusLogo from '../assets/asus-logo.png'
import gigabyteLogo from '../assets/gigabyte-logo.png'
import sapphireLogo from '../assets/sapphire-logo.png'
import appleLogo from '../assets/apple-logo.png'
import googleLogo from '../assets/google-logo.png'
import motoLogo from '../assets/motorola-logo.png'
import qualLogo from '../assets/qualcomm-logo.png'
import nvidiaLogo from '../assets/nvidia-logo.png'

const getImage = (name) => {
  const imageMap = {
    'INTEL': IntelLogo,
    'AMD': amdLogo,
    'GIGABYTE': gigabyteLogo,
    'SAPPHIRE': sapphireLogo,
    'ASUS': asusLogo,
    'MOTOROLA': motoLogo,
    'QUALCOMM': qualLogo,
    'APPLE': appleLogo,
    'GOOGLE': googleLogo,
    'NVIDIA': nvidiaLogo
  }
  return imageMap[name.substring(0, name.indexOf(' ')).toUpperCase()];
}

const Card = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <article className="card-product">
        <div className="manufacturer">
          <img src={getImage(product.model)} alt="Manufacturer logo" className='brand-logo' />
        </div>
        <img src={NAImage} alt="Product logo" className='product-image' />
        <p className='product-name'>
          {`${product.model.substring(product.model.indexOf(' '))}`}
        </p>
        <div className='price-listing'>
          <p className='product-price'>
            {`${product.price ? product.price + '€' : 'N/A'}`}
          </p>
          <button className='button btn-details' onClick={handleShow}>Detalles</button>
        </div>
      </article>
      <DetailsModal product={product} show={show} setShow={setShow} />
    </>
  )
}
export default Card