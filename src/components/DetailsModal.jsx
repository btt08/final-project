import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DetailsModal({ product, show, setShow }) {
  const handleClose = () => setShow(false);
  return (
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
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailsModal;