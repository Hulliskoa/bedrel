import React from "react";
import "./App.css";
import Header from "./components/header/header";
import PrimaryButton from "./components/buttons/primaryButton";
import MainPage from "./layout/MainPage";

function App() {
  return (
    <MainPage>
      <>
        <Header />
        <div className='px-10 flex gap-x-10'>
          <PrimaryButton title='Påmelding' onPress={() => {}} />
          <PrimaryButton title='Alt button' onPress={() => {}} alt />
        </div>
      </>
    </MainPage>
  );
}

export default App;
