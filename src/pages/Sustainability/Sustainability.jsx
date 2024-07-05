import "./Sustainability.scss";
import React from "react";
import image from "assets/images/sustainability-img.svg";

const Sustainability = () => {
  return (
    <section className="sustainability container">
      <div className="images">
        <img src={image} alt="sustainability" />
        <img src={image} className="second" alt="sustainability" />
      </div>
      <article className="group">
        <div className="card">
          <h2>Our Commitment to Sustainability</h2>
          <p>
            LibraLink is committed to reducing our environmental footprint
            through the use of renewable energy sources. We strive to set
            industry standards for sustainability, ensuring our operations
            benefit both our clients and the planet. Our dedication to green
            energy is reflected in every aspect of our business, from the design
            of our facilities to our day-to-day operations.
          </p>
        </div>
        <div className="card">
          <h2>Green Energy Initiatives</h2>
          <p>
            Our datacenters are powered by 100% renewable energy, including wind
            and solar. We continuously invest in new technologies and practices
            to enhance our sustainability efforts and reduce our carbon
            footprint. By harnessing the power of nature, we ensure that our
            datacenters operate efficiently and responsibly.
          </p>
        </div>
        <div className="card">
          <h2>Innovative Cooling Solutions</h2>
          <p>
            Efficient cooling is crucial to maintaining performance and energy
            efficiency in our datacenters. Our advanced cooling systems use
            natural cooling techniques and cutting-edge technology to minimize
            energy consumption. These systems are designed to adapt to varying
            environmental conditions, ensuring optimal cooling efficiency
            throughout the year.
          </p>
        </div>
        <div className="card">
          <h2>Future Goals</h2>
          <p>
            Looking ahead, LibraLink aims to expand our network of green
            datacenters across Europe and beyond. We are committed to leading
            the industry in sustainable practices and setting new benchmarks for
            environmental responsibility. Our future projects include exploring
            new renewable energy sources and further enhancing our energy
            management systems to achieve even greater sustainability.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Sustainability;
