import React from "react";

const loadStatus = () => {
  console.log("load status");
  throw new Promise(resolves => setTimeout(resolves, 3000));
};

export default function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}