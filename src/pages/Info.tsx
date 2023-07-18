import React from "react";

import PrimaryButton from "../components/buttons/PrimaryButton";
import Page from "../layout/Page";

function Info() {
  return (
    <Page>
      <PrimaryButton title='DDDD' onPress={() => {}} />
      <PrimaryButton title='Alt button' onPress={() => {}} alt />
    </Page>
  );
}

export default Info;
