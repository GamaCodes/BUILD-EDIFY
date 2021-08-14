import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function Service() {
  return (
    <div>
      <img className="about-img" src="/be2.jpg" alt="about" />
      <h3 className="about-title">¿Qué ofrecemos?</h3>
      <section className="about-p">
        <p>
          <span className="about-span">Build & Edify</span> tiene el compromiso
          de calidad y administración de sus obras, por eso es muy importante la
          comunicación con clientes y empleados. sabemos que la comunicación es
          la base para contrarrestar la frustración de nuestros clientes. es por
          eso que mantenemos total comunicación con nuestros supervisores por
          voz y electrónicamente para seguir los programas de obra estipulados,
          eliminando errores.
        </p>
        <p className="about-text">
          "Con un servicio de calidad.
          <span className="about-span"> Build & Edify</span> cuida tu obra.""
        </p>
      </section>
      <img className="service-img" src="/be11.png" alt="service" />
      <h3 className="about-title">Nuestros Servicios</h3>
      <section className="about-p">
        <ListGroup vertical>
          <ListGroup.Item>Obra Civil en General</ListGroup.Item>
          <ListGroup.Item>Revestimientos Especiales</ListGroup.Item>
          <ListGroup.Item>Instalaciones Eléctricas</ListGroup.Item>
          <ListGroup.Item>Mantenimiento de Inmuebles</ListGroup.Item>
          <ListGroup.Item>Recubrimientos Industriales</ListGroup.Item>
          <ListGroup.Item>Sistemas de Irrigación</ListGroup.Item>
          <ListGroup.Item>Concreto Estampado</ListGroup.Item>
          <ListGroup.Item>
            Mantenimiento y Rehabilitación de Climas
          </ListGroup.Item>
          <ListGroup.Item>Rehabilitación y Remodelación</ListGroup.Item>
          <ListGroup.Item>Sand Blasting</ListGroup.Item>
        </ListGroup>
      </section>
      <section className="service-section">
        <img className="service-section-img" src="/be7.png" alt="service" />
        <img className="service-section-img" src="/be8.png" alt="service" />
        <img className="service-section-img" src="/be6.png" alt="service" />
      </section>
    </div>
  );
}
