import "./Home.scss";
import React from "react";
import { ReactComponent as Icon1 } from "assets/icons/home-expertice-1.svg";
import { ReactComponent as Icon2 } from "assets/icons/home-expertice-2.svg";
import { ReactComponent as Icon3 } from "assets/icons/home-expertice-3.svg";
import { ReactComponent as Icon4 } from "assets/icons/home-expertice-4.svg";

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
      <article>
        <div className="cards container">
          <div className="card">
            <Icon1 />
            <div className="text">
              <h3>High Performance Computing</h3>
              <p>
                Leveraging cutting-edge technology to deliver exceptional
                processing power for complex computational tasks.
              </p>
            </div>
          </div>
          <div className="card">
            <Icon2 />
            <div className="text">
              <h3>AI Hosting Solutions</h3>
              <p>
                Providing robust and scalable infrastructure specifically
                designed for advanced AI applications and machine learning
                models.
              </p>
            </div>
          </div>
          <div className="card">
            <Icon3 />
            <div className="text">
              <h3>Sustainable Datacenter Management</h3>
              <p>
                Ensuring optimal efficiency and performance through innovative
                energy management practices and the use of renewable energy
                sources.
              </p>
            </div>
          </div>
          <div className="card">
            <Icon4 />
            <div className="text">
              <h3>Scalability and Future Expansion</h3>
              <p>
                Supporting your business growth with flexible and adaptable
                solutions that scale seamlessly with your needs.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
