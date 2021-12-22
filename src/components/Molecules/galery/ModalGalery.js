import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

function ModalGalery(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Galeria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <Carousel interval={null}>
          {props.data?.map((el) => (
            <Carousel.Item key={`${el.thumbnail}/${props.data.indexOf(el?.thumbnail)}`}>
              <img
                className="d-block w-100"
                src={`/${el.thumbnail?.slice(8)}`}
                alt={el.thumbnail?.slice(8)}
                // key={`${el.thumbnail}/${props.data.indexOf(el?.thumbnail)}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGalery;
