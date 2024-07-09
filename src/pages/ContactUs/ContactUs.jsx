import "./ContactUs.scss";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "components/Button";
import Input from "components/Input/Input";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("SUCCESS", data);
    setSubmitted(true);
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

            {/* <div>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <TextArea
                    label="Describe your problem *"
                    placeholder="Describe your problem"
                    {...field}
                    error={errors.description}
                  />
                )}
              />
            </div> */}
            <Button>Send</Button>
            {submitted && <h3>Your form has been successfully submitted!</h3>}
          </form>
        </div>
      </article>
    </section>
  );
};

export default ContactUs;
