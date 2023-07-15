import React from "react";

import Page from "../layout/Page";
import TextContainer from "../components/text/TextContainer";
import PrimaryButton from "../components/buttons/primaryButton";
import { ReactComponent as Cappelen } from "../components/images/1Logogs.svg";
import PlantBook from "../components/images/plantBook.svg";
function Home() {
  return (
    <>
      <Page>
        <div className='col-span-6 h-[calc(100vh-250px)] flex'>
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
        <div className='col-span-6 grid '>
          <div className='mx-auto'>
            <img src={PlantBook} alt='plant on top of book' />
          </div>
        </div>
      </Page>
      <Page>
        <div className='lg:col-span-3 flex'>
          <div className='text-[30px] md:text-[50px] font-semibold'>
            Hvorfor delta?
          </div>
          <TextContainer>
            <div></div>
          </TextContainer>
        </div>
        <div className='lg:col-span-3  flex'>
          <div className='text-[30px] md:text-[50px] font-semibold'>
            Program
          </div>
          <TextContainer>
            <div></div>
          </TextContainer>
        </div>
        <div className='lg:col-span-3  flex flex-col'>
          <div className='text-[30px] md:text-[50px] font-semibold'>
            Partnere
          </div>
          <div className='grid gap-x-20 grid-cols-3'>
            <div>
              <Cappelen />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default Home;
