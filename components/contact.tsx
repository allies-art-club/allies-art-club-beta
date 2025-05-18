"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import React from "react";
import { useRouter } from "next/navigation";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();
  const router = useRouter();

  function onSubmit(data: ContactFormData) {
    sendEmail(data)
      .then(() => {
        router.push("/thank-you");
      })
      .catch(() => {
        alert("Failed to send message, please try again.");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="form-control"
          {...register("name", { required: true })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@domain.com"
          className="form-control"
          {...register("email", { required: true })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Type your message"
          className="form-control"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="btn w-100"
          style={{ backgroundColor: "#FF66B0", color: "#000" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
