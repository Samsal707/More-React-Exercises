//this is component enables iteration through their GitHub repositories
import React from "react";
import { useIterator } from "./useIterator";
// import RepositoryReadme from "./RepositoryReadme";


export default function RepoMenu({ repositories, selected, onSelect = f => f }) {
  const [{ name }, previous, next] = useIterator(
    repositories,
    selected ? repositories.findIndex(repo => repo.name === selected) : null
  );
  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      {/* <RepositoryReadme  repo={name} /> */}
    </>
  );
}