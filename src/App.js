import React, { useState } from "react";
import GitHubUser from "./GitHubUser";
// import SearchForm from "./SearchForm";

export default function App() {
  const [login, setLogin] = useState("moontahoe");

  return (
    <>
      {/* <SearchForm value={login} onSearch={setLogin} /> */}
      <GitHubUser login={login} />
    </>
  );
}

// const tahoe_peaks = [
//   { name: "Freel Peak", elevation: 10891 },
//   { name: "Monument Peak", elevation: 10067 },
//   { name: "Pyramid Peak", elevation: 9983 },
//   { name: "Mt. Tallac", elevation: 9735 }
// ];

