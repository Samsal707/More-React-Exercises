import React from "react"
import ErrorBoundary from "./ErrorBoundary";

export const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);