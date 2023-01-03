import React, { useState, Suspense, lazy } from "react";
import Agreement from "./Agreement";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./ErrorBoundary";
import ErrorScreen from "./ErrorScreen";

const Main = lazy(() => import("./Main"));

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree)
    return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <ErrorBoundary fallback={ErrorScreen}>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
}