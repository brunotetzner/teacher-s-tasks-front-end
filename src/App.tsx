import React from "react";
import { useTasks } from "./providers/tasksProvider";
import { Itask } from "./interfaces/tasks";
import { useState } from "react";
import { PageBody } from "./components/pageBody";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <PageBody></PageBody>
    </>
  );
}

export default App;
