import React from "react";
import About from "./About";
import Service from "./Service";
import Philosophy from "./Philosophy";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Main() {
  return (
    <div className="main-contain" id="about">
      <section className="main-body">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3 main-tabs"
        >
          <Tab eventKey="profile" title="Filosofía">
            <Philosophy />
          </Tab>
          <Tab eventKey="home" title="Acerca de">
            <About />
          </Tab>
          <Tab eventKey="contact" title="Servicios">
            <Service />
          </Tab>
        </Tabs>
      </section>
    </div>
  );
}
