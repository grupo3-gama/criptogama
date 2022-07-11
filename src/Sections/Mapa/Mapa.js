import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mapa.css";

const Map = () => {
  return (
    <section className="map" id="map">
      <Container className="container">
        <Row className="pai">
          <Col class="col1">
            <div>
              <div className="formulario">
                <form>
                  <div className="heading">
                    <h1>Entre em contato</h1>
                  </div>
                  <div className="espaco" />
                  <div className="inputBox">
                    <input
                      type="text"
                      required=""
                      className="input"
                      placeholder=""
                    />
                    <span>Nome</span>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      required=""
                      className="input"
                      placeholder=""
                    />
                    <span>Email</span>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      required=""
                      className="input"
                      placeholder=""
                    />
                    <span>Whatsapp</span>
                  </div>
                  <div className="inputBox">
                    <textarea
                      type="text"
                      required=""
                      className="input"
                      placeholder=""
                    />
                    <span>Menssagem</span>
                  </div>
                  <button className="botao" type="submit">
                    <span>ENVIAR</span>
                  </button>
                </form>
              </div>
            </div>
          </Col>
          <Col className="col2">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3314519449045!2d-35.210161050192205!3d-5.808779195770166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x791ccfc70f307d75!2zNcKwNDgnMzEuNiJTIDM1wrAxMicyOC43Ilc!5e0!3m2!1spt-BR!2sbr!4v1657392855638!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Map;
