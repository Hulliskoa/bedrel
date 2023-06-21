import React from "react";

import PrimaryButton from "../components/buttons/primaryButton";
import Page from "../layout/Page";

function Program() {
  return (
    <Page>
      <PrimaryButton title='DDDD' onPress={() => {}} />
      <PrimaryButton title='Alt button' onPress={() => {}} alt />
    </Page>
  );
}

export default Program;
