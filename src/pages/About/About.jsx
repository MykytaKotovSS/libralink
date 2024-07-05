import "./About.scss";
import React from "react";

const About = () => {
  return (
    <section className="about">
      <article className="about-us">
        <div className="first container">
          <h1>About LibraLink</h1>
          <p>
            LibraLink is dedicated to providing cutting-edge datacenter
            solutions that prioritize both performance and <br />
            environmental responsibility. Our commitment to using green energy
            ensures that we deliver powerful, reliable <br /> services without
            compromising the planet’s future. With facilities in Luxembourg and
            Belgium, we are <br /> strategically positioned to serve clients
            across Europe and beyond.
          </p>
        </div>
      </article>
      <article>
        <div className="second container">
          <h1>Our Mission & Vision</h1>
          <p>
            Our mission is to empower businesses with sustainable,
            high-performance computing solutions. We envision a <br /> future
            where technology and environmental stewardship go hand in hand,
            driving innovation and progress. By <br /> continually advancing our
            technologies and expanding our capabilities, we aim to set new
            standards for <br />
            excellence in the datacenter industry.
          </p>
        </div>
      </article>
      <article className="bottom">
        <div className="second third container">
          <h1>Meet the Team</h1>
          <p>
            Our team of experts is passionate about leveraging technology to
            create a better world. <br /> With extensive experience in
            datacenter management, high performance computing, and renewable{" "}
            <br /> energy, we are equipped to lead the industry towards a
            sustainable future.
            <br />
            <br /> Our diverse team brings together professionals from various
            fields, all united by a shared vision of innovation and
            sustainability.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
