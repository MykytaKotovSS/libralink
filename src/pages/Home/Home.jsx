import "./Home.scss";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <article className="main">
        <div className="first container">
          <h1>
            Pioneering Green Energy <br /> Datacenters for the Future <br /> of
            AI and High Performance <br /> Computing
          </h1>
          <p>
            Harnessing Sustainable Power for Unmatched Performance and
            Innovation
          </p>
        </div>
      </article>
      <article>
        <div className="second container">
          <h1>Who We Are</h1>
          <div className="block">
            <p>
              Our team combines expertise in technology and a deep commitment to
              environmental stewardship, creating datacenter solutions that not
              only meet but exceed industry standards.
            </p>
            <p>
              Our team combines expertise in technology and a deep commitment to
              environmental stewardship, creating datacenter solutions that not
              only meet but exceed industry standards.
            </p>
          </div>
        </div>
      </article>
      <article>
        <div className="second third container">
          <h1>Our Expertise</h1>
          <p>
            We offer a comprehensive range of services tailored to meet the
            demands of modern enterprises:
          </p>
        </div>
      </article>
    </section>
  );
};

export default Home;
