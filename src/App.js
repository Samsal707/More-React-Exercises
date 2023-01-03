import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
// import GitHubUser from "./GitHubUser";
// import UserRepositories from "./UserRepositories";
// import RepositoryReadme from "./RepositoryReadme";
import { GraphQLClient } from "graphql-request";
import UserDetails from "./UserDetails"
import List from "./List"

const query = `
  query findRepos($login:String!) {
    user(login:$login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      Authorization: `Bearer <Access_Token>`
    }
  }
);

client
  .request(query, { login: "samsal707" })
  .then(results => JSON.stringify(results, null, 2))
  .then(console.log)
  .catch(console.error);


export default function App() {
  const [login, setLogin] = useState("samsal707");
  const [userData, setUserData] = useState();
  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [login]);

  if (!userData) return <p>loading...</p>;

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={repo => <span>{repo.name}</span>}
      />
    </>
  );
}

// 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