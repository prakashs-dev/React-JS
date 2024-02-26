import React, { createElement, useRef } from "react";
import { myDatas } from "../myData";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip } from "antd";

function Contact() {
  const { Contact } = myDatas;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zn5pvm9", //YOUR_SERVICE_ID
        "template_e4rg1b2", //YOUR_TEMPLATE_ID
        form.current,
        "XgnpTDYkWe3zM3eW6" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error);
          toast.error("Sending failed...");
        }
      );
  };

  return (
    <section className="bg-[#d3e3fd] text-black" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex flex-row gap-8">
          {Contact.social_media.map((content, i) => (
            <a
              key={i}
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              data-aos="fade-down"
              data-aos-delay={i * 430}
            >
              <Tooltip title={content.text}>
                {createElement(content.icon, { className: "w-8 h-8" })}
              </Tooltip>
            </a>
          ))}
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          className="mt-10 flex flex-col gap-5 w-50"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="border border-slate-600 p-3 rounded"
          />
          <input
            type="email"
            name="user_email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="Email Id"
            required
            className="border border-slate-600 p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-slate-600 p-3 rounded h-44"
            required
          ></textarea>
          <button
            type="submit"
            className="btn self-center bg-white text-dark_primary hover:bg-sky-400 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
