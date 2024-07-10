import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon1 } from "assets/icons/home-expertice-1.svg";
import { ReactComponent as Icon2 } from "assets/icons/home-expertice-2.svg";
import { ReactComponent as Icon3 } from "assets/icons/home-expertice-3.svg";
import { ReactComponent as Icon4 } from "assets/icons/home-expertice-4.svg";
import Button from "components/Button";

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
          <Link to="/services">
            <Button>Discover Our Services</Button>
          </Link>
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
          <p className="mobile-centered">
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
      <article className="bottom" style={{ display: "none" }}>
        <div className="five container">
          <h1>Sustainability at Our Core</h1>
          <h3>Contact Us Today to Learn More About Our Green Solutions</h3>
          <p>
            At LibraLink, sustainability is not an afterthought – it's integral
            to our mission. Our datacenters are powered by renewable energy
            sources, minimizing our carbon footprint while maximizing efficiency
            and performance. By integrating green technologies and practices, we
            ensure that our operations are environmentally responsible and
            contribute positively to global sustainability efforts.
          </p>
          <Link to="/contact-us">
            <Button>Contact us</Button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Home;
