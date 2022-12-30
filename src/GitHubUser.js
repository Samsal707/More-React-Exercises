import React from "react";
import Fetch from "./Fetch";
import LoadingSpinner from "./LoadingSpinner";

export default function GitHubUser({ login }) {
  return (
    <Fetch
  uri={`https://api.github.com/users/${login}`}
  loadingFallback={<LoadingSpinner />}
  renderError={error => {
    // handle error
    return <p>Something went wrong... {error.message}</p>;
  }}
  renderSuccess={({ data }) => (
    <>
      <h1>Todo: Render UI for data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )}
/>

  // <Fetch
  // uri={`https://api.github.com/users/${login}`}
  // loadingFallback={<LoadingSpinner />}
  // renderError={error => {
  //   // handle error
  //   return <p>Something went wrong... {error.message}</p>;
  // }}
  // renderSuccess={({ data }) => (
  //   <>
  //     <h1>Todo: Render UI for data</h1>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </>
//   )}
// />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}