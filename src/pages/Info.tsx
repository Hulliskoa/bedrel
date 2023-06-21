import React from "react";


import PrimaryButton from "../components/buttons/primaryButton";

function Info() {
  return (
    <div className='px-10 flex gap-x-10'>
      <PrimaryButton title='DDDD' onPress={() => {}} />
      <PrimaryButton title='Alt button' onPress={() => {}} alt />
    </div>
  );
}

export default Info;
