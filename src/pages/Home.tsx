import React from "react";

import Page from "../layout/Page";
import TextContainer from "../components/text/TextContainer";
import PrimaryButton from "../components/buttons/primaryButton";
import PlantBook from "../components/images/plantBook.svg";
import cappelen from "../components/images/Sponsor 1Logogs.svg";
import aschehoug from "../components/images/Sponsor 2Logogs.svg";
import learnlab from "../components/images/Sponsor 3Logogs.svg";
import googleEdu from "../components/images/Sponsor 4Logogs.svg";
import fagbokforlaget from "../components/images/Sponsor 5Logogs.svg";
import creaza from "../components/images/Sponsor 6Logogs.svg";
import skolon from "../components/images/Sponsor 7Logogs.svg";
import microsoft from "../components/images/Sponsor 8Logogs.svg";
import pendel from "../components/images/Sponsor 9Logogs.svg";

function Home() {
  return (
    <>
      <Page>
        <div className='col-span-6 flex'>
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
        <div className='col-span-6  hidden sm:grid'>
          <div className='mx-auto'>
            <img src={PlantBook} alt='plant on top of book' />
          </div>
        </div>

        <div className='col-span-12'>
          <div className='font-semibold text-[28px] mb-4  '>Hvorfor delta?</div>

          <div className='grid md:grid-cols-4 gap-y-6 gap-x-6'>
            <div className='bg-[#D9D9D9] col-span-2 h-52 w-full'></div>
            <div className='bg-[#D9D9D9] col-span-2 h-52 w-full'></div>
            <div className='bg-[#D9D9D9] h-52 w-full'></div>
            <div className='bg-[#D9D9D9] h-52 w-full'></div>
            <div className='bg-[#D9D9D9] h-52 w-full'></div>
            <div className='bg-[#D9D9D9] h-52 w-full'></div>
          </div>
        </div>

        <div className='col-span-12'>
          <div className='font-semibold text-[28px] mb-4  '>Partnere</div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6'>
            <img className='w-full' src={cappelen} alt='cappelen' />
            <img className='w-full' src={aschehoug} alt='aschehoug' />
            <img className='w-full' src={learnlab} alt='learn lab' />
            <img className='w-full' src={googleEdu} alt='google education' />
            <img className='w-full' src={fagbokforlaget} alt='fagbokforlaget' />
            <img className='w-full' src={creaza} alt='creaza' />
            <img className='w-full' src={skolon} alt='skolon' />
            <img className='w-full' src={microsoft} alt='microsoft' />
            <img className='w-full' src={pendel} alt='pendel' />
          </div>
        </div>
      </Page>
    </>
  );
}

export default Home;
