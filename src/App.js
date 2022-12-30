// import React, { useState } from "react";
// // import GitHubUser from "./GitHubUser";
// import { FixedSizeList } from "react-window";
// // import List from "./List"
// import faker from "faker"
// // import SearchForm from "./SearchForm";

// const bigList = [...Array(50)].map(() => ({
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar()
// }));


// export default function App() {
//   const renderRow = ({ index, style }) => (
//     <div style={{ ...style, ...{ display: "flex" } }}>
//       <img
//         src={bigList[index].avatar}
//         alt={bigList[index].name}
//         width={50}
//       />
//       <p>
//         {bigList[index].name} - {bigList[index].email}
//       </p>
//     </div>
//   );

//   return (
//     <FixedSizeList
//       height={window.innerHeight}
//       width={window.innerWidth - 20}
//       itemCount={bigList.length}
//       itemSize={50}
//     >
//       {renderRow}
//     </FixedSizeList>
//   );
// }


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
