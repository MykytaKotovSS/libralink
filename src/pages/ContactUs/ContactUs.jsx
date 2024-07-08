import "./ContactUs.scss";
import React from "react";

const ContactUs = () => {
  return (
    <section className="contact">
      <article className="main">
        <div className="first container">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Whether you’re interested in our
            services, have questions, or want to discuss a potential
            partnership, our team is here to help. Reach out to us via email or
            phone, or visit our headquarters in Luxembourg for a face-to-face
            meeting.
          </p>
          <p>
            Email <br />
            <span>info@libralink.com</span>
          </p>
          <p>
            Phone <br />
            <span>+352 123 456 789</span>
          </p>
          <p>
            Address <br />
            <span>LibraLink HQ, 12 Green Street,</span>
            <br />
            <span>Luxembourg City, Luxembourg</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default ContactUs;
