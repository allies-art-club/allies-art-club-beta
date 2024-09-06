"use client"; // Keep this if you want to make the component interactive

import React from "react";

import { Form, Input, Textarea, Button } from '../../components/Styled/contact.styled.js';


function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("/api/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log("Success", result);
        } else {
          console.log("Error", result);
        }
      })
      .catch((error) => {
        console.error("An error occurred while submitting the form", error);
      });
  };

  return (
    <Form onSubmit={onSubmit} id="FormContact">
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Textarea name="message" placeholder="Your Message" required></Textarea>
      <Button type="submit">Submit Form</Button>
    </Form>
  );
}

export default Contact;
