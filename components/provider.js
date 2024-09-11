"use client";

import React from "react";
import { Provider } from "react-redux";

export function Providers({ children }) {
  return <Provider>{children}</Provider>;
}
