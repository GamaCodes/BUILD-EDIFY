import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function About() {
  return (
    <div>
      <img className="about-img" src="/be1.jpg" alt="about" />
      <h3 className="about-title">¿Quiénes somos? </h3>
      <section className="about-p">
        <p>
          Construcción y desarrollos del norte{" "}
          <span className="about-span">“Build & Edify”</span> es una empresa
          formada desde 2007 ofreciendo servicio de proyectos, obra civil,
          construcción de pisos planos y mantenimientos en general.
        </p>
        <p>
          <span className="about-span">Build & Edify</span> comprometidos con la
          calidad, rapidez, pero, sobre todo, manteniendo nuestros costos
          competitivos.
        </p>
        <p>
          Cuidando a nuestros clientes con el mejor trato, como si se tratara de
          el único cliente. sabemos que los tiempos son muy importantes, por eso
          <span className="about-span"> Build & edify</span> personaliza cada
          uno de nuestros proyectos para realizar las obras manteniendo los
          tiempos pactados, si descuidar la calidad que nos caracteriza.
        </p>
        <p>
          Iniciando en un principio al norte del país, específicamente en el
          estado de Coahuila.
        </p>
      </section>
      <img className="service-img" src="/be10.png" alt="about" />
      <h3 className="about-title">Valores y Actitudes</h3>
      <section className="about-p">
        <ListGroup vertical>
          <ListGroup.Item>Compromiso</ListGroup.Item>
          <ListGroup.Item>Integridad</ListGroup.Item>
          <ListGroup.Item>Responsabilidad</ListGroup.Item>
          <ListGroup.Item>Respeto</ListGroup.Item>
          <ListGroup.Item>Ética Profesional </ListGroup.Item>
          <ListGroup.Item>Innovación y Creatividad</ListGroup.Item>
          <ListGroup.Item>Responsabilidad Social</ListGroup.Item>
          <ListGroup.Item>Espíritu de Trabajo</ListGroup.Item>
          <ListGroup.Item>Espíritu de Servicio</ListGroup.Item>
          <ListGroup.Item>Lealtad y Confidencialidad</ListGroup.Item>
          <ListGroup.Item> Capacitación Continua</ListGroup.Item>
        </ListGroup>
      </section>
    </div>
  );
}
