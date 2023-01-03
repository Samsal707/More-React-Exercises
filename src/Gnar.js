import React, { createResource } from "react";


export default function Gnar() {
  const threeSecondsToGnar = new Promise(resolves =>
  setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);

const resource = createResource(threeSecondsToGnar);


  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
}