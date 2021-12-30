import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalGalery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
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
        <>
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            {props.data?.map((el) => (
              <SwiperSlide
                key={`${el.thumbnail}/${props.data.indexOf(el?.thumbnail)}`}
              >
                <img
                  className="d-block w-100"
                  id={`img`}
                  style={{ objectFit: "contain" }}
                  src={`/${el.thumbnail?.slice(8)}`}
                  alt={el.thumbnail?.slice(8)}
                  // key={`${el.thumbnail}/${props.data.indexOf(el?.thumbnail)}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "black" }} onClick={props.onHide}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGalery;
