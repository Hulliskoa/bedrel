import React from "react";

import Page from "../layout/Page";
import TextContainer from "../components/text/TextContainer";
import PrimaryButton from "../components/buttons/primaryButton";

function Home() {
  return (
    <Page>
      <div className='lg:col-span-3 flex'>
        <TextContainer title='Bedre Læring'>
          <div>
            Konferansen for lærere, skoleledere og alle dere som brenner for
            skole! La oss sammen utforske hvordan vi kan skape enda mer
            engasjernede læring på digitale flater.
          </div>
          <div className='justify-self-start mt-16'>
            <PrimaryButton alt onPress={() => {}} title='Påmelding' />
          </div>
        </TextContainer>
      </div>
    </Page>
  );
}

export default Home;
