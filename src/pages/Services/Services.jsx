import "./Services.scss";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Desktop } from "assets/icons/Desktop.svg";
import { ReactComponent as CheckSquare } from "assets/icons/CheckSquareOffset.svg";
import { ReactComponent as AppWindow } from "assets/icons/AppWindow.svg";
import { ReactComponent as Browsers } from "assets/icons/Browsers.svg";

const Services = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      setAnimate(true);
    }
  }, []);

  return (
    <section
      className={`services ${animate ? "animate" : ""}`}
      ref={sectionRef}
    >
      <h1>our Services</h1>
      <article className="group container">
        <div className="card">
          <Desktop />
          <h2>High Performance Computing</h2>
          <p>
            Our high performance computing solutions are designed to handle the
            most demanding workloads, offering unparalleled speed and
            efficiency. From research and development to real-time data
            processing, we provide the power you need to stay ahead. Our
            infrastructure supports a wide range of applications, ensuring that
            you have the computational resources required to drive your projects
            forward
          </p>
        </div>
        <div className="card blue">
          <AppWindow />
          <h2>AI Hosting Solutions</h2>
          <p>
            LibraLink offers specialized hosting solutions tailored for AI
            applications. Our infrastructure supports advanced machine learning
            and deep learning models, ensuring optimal performance and
            scalability. Whether you are developing new AI technologies or
            deploying sophisticated models, our datacenters provide the robust
            environment needed to support your initiatives.
          </p>
        </div>
        <div className="card">
          <CheckSquare />
          <h2>Sustainable Datacenter Management</h2>
          <p>
            We manage our datacenters with a focus on sustainability, using
            green energy to power our facilities. Our innovative cooling and
            energy management systems reduce environmental impact while
            maintaining top-tier performance. By integrating renewable energy
            sources and optimizing energy use, we ensure that our operations are
            both efficient and environmentally friendly.
          </p>
        </div>
        <div className="card blue">
          <Browsers />
          <h2>Scalability and Future Expansion</h2>
          <p>
            As your business grows, so do your computing needs. LibraLink’s
            datacenters are designed with scalability in mind, allowing for
            seamless expansion and adaptation to future technologies and
            demands. Our flexible infrastructure supports your growth, ensuring
            that you can scale up your operations without compromising on
            performance or sustainability.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Services;
