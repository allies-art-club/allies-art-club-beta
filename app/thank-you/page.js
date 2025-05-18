"use client";

import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 p-4 text-center">
      <h1 className="mb-4">Thank You!</h1>
      <p className="mb-4">
        Your message has been sent successfully. W&apos;ll be in touch shortly.
      </p>
      <Link
        href="/"
        className="btn"
        style={{ backgroundColor: "#FF66B0", color: "#000" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
