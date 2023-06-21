import React from "react";
import "./App.css";
import Header from "./components/header/header";
import PrimaryButton from "./components/primaryButton";
import MainPage from "./layout/MainPage";

function App() {
  return (
    <MainPage>
      <>
        <Header />
        <div className='px-10'>
          <PrimaryButton title='Påmelding' />
        </div>
      </>
    </MainPage>
  );
}

export default App;
