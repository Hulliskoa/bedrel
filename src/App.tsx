import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MainPage from "./layout/MainPage";
import { RouterElement } from "./routes";

function App() {
  return (
    <div className='bg-dragonbreath min-w-[380px]'>
      <div className="sticky top-0 z-20">
      <Header />
      </div>
   
      
      <MainPage>
        <RouterElement />
      </MainPage>
    </div>
  );
}

export default App;
