import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MainPage from "./layout/MainPage";
import { RouterElement } from "./routes";

function App() {
  return (
    <>
      <Header />
      <MainPage>
        <RouterElement />
      </MainPage>
    </>
  );
}

export default App;
