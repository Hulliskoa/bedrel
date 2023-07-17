import React from "react";

import Page from "../layout/Page";
import TextContainer from "../components/text/TextContainer";
import PrimaryButton from "../components/buttons/primaryButton";
import PlantBook from "../components/images/plantBook.svg";

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
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
          </div>
        </div>

        <div className='col-span-12'>
          <div className='font-semibold text-[28px] mb-4  '>Partnere</div>

          <div className='grid md:grid-cols-4 gap-y-6 gap-x-6'>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
            <div className='bg-[#D9D9D9]  h-52 w-full'></div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default Home;
