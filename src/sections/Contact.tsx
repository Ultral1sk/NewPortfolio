import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";

import contactIconSrc from "@/public/assets/icons/contact.png";
import "@/src/sections/Contact.scss";

import data from "src/data.json";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  optional = false,
}) => (
  <section className={`input-${name}`}>
    <label htmlFor={name}>
      {label} {required && <sup>*</sup>} {optional && <span>(optional)</span>}
    </label>
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
      <div className="underline" />
    </div>
  </section>
);

const Select = ({ label, name, options, required = false }) => (
  <section className={`input-${name}-wrapper`}>
    <label htmlFor={name}>
      {label} {required && <sup>*</sup>}
    </label>
    <br />
    <select
      className={`select-${name}`}
      name={name}
      id={name}
      required={required}
    >
      <option value="Please select a subject">Please select a subject</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </section>
);

export const Contact = () => {
  return (
    <div className="contact-container">
      <Chip
        title="Contact"
        icon={<Image src={contactIconSrc} alt="Contact" />}
      />
      <h2 className="contact-info-title">
        Let's Work <span>Together!</span>
      </h2>
      <form className="contact-form">
        <Contact.Input
          label="Full Name"
          name="full-name"
          placeholder="Your Full Name"
          required
        />
        <Contact.Input
          label="Email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
        />
        <Contact.Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          optional
        />
        <Contact.Select
          label="Subject"
          name="subject"
          options={data.subjectOptions}
          required
        />
        <Contact.Input
          label="Message"
          name="message"
          placeholder="Write your message here ..."
        />
        <button type="submit" className="form-submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

Contact.Input = Input;
Contact.Select = Select;
