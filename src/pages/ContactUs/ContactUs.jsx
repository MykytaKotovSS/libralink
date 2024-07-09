import "./ContactUs.scss";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "components/Button";
import Input from "components/Input/Input";
import TextArea from "components/TextArea";
import emailjs from "emailjs-com";
import { ReactComponent as Location } from "assets/images/contact-us-location.svg";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_ayib40t", "template_511yfng", data, "9-maX-QhpOfHSK9tP")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    reset();
  };

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
      <article className="form-container">
        <div className="form-wrapper container">
          <h2>Send Us a Message</h2>
          <p>
            Please fill out the form below and we will get back to you as soon
            as possible.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Input
                    label="Name"
                    placeholder="Name"
                    {...field}
                    error={errors.name}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="Email"
                    placeholder="Email"
                    {...field}
                    error={errors.email}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <Input
                    label="Subject"
                    placeholder="Subject"
                    {...field}
                    error={errors.subject}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextArea
                    label="Message"
                    placeholder="Message"
                    {...field}
                    error={errors.message}
                  />
                )}
              />
            </div>
            <Button>Send</Button>
            {submitted && <h3>Your form has been successfully submitted!</h3>}
          </form>
        </div>
      </article>

      <article>
        <div className="location container">
          <h2>Our Locations</h2>
          <p>
            Visit our state-of-the-art facilities in Luxembourg and Belgium. Our
            strategic locations allow us to serve clients across Europe
            efficiently and effectively. Use the map below to find our offices
            and datacenters.
          </p>

          <Location />
        </div>
      </article>
    </section>
  );
};

export default ContactUs;
