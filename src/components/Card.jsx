import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

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
import { useState } from 'react';

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
  const handleClose = () => setShow(false);
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.model}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='product-details'>
          <p>Fabricante: <span>{product.brand.shortName}</span></p>
          <p>Referencia: <span>{product.refCode}</span></p>
          <p>PRecio: <span>{product.price}€</span></p>
          <p>Datos de fabricante:</p>
          <ul className='product-details-list'>
            <li><p>ISIN: <span>{product.brand.ISIN}</span></p></li>
            <li><p>Nombre: <span>{product.brand.fullName}</span></p></li>
            <li><p>País: <span>{product.brand.country}</span></p></li>
            <li><p>CEO: <span>{product.brand.ceo}</span></p></li>
            <li>
              <p>Página web:
                <span>
                  <a href={product.brand.website}
                    target='_blank'
                    rel='noreferrer'>
                    {product.brand.website}</a>
                </span>
              </p></li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Card