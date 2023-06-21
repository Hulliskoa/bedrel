import React from "react";


import PrimaryButton from "../components/buttons/primaryButton";

function Home() {
  return (
    <div className='px-10 flex gap-x-10'>
      <PrimaryButton title='Påmelding' onPress={() => {}} />
      <PrimaryButton title='Alt button' onPress={() => {}} alt />
    </div>
  );
}

export default Home;
