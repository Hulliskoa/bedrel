import React from "react";

import Page from "../layout/Page";
import TextContainer from "../components/text/TextContainer";

function Home() {
  return (
    <Page>
      <div className='col-span-4'>Hello</div>
      <TextContainer colSpan='2' title='Velkommen'>
        <div>
          Læring på digitale flater arrangeres på de samme tre stedene hver vår,
          og varer i to dager på hvert sted. De fleste som besøker konferansen
          overnatter på hotellene der konferansen holdes, men det er også mulig
          å delta uten å overnatte. Programmet er tilnærmet likt på de tre
          stedene, og inneholder en fin balanse mellom foredrag, praksisnære
          seminarer og tid til det sosiale.
        </div>
      </TextContainer>
      <TextContainer colSpan='2' title='Tidspunkt '>
        <div>
          Det faglige innholdet starter med en felles åpning klokka 09:00 og
          varer til ca 16:00 den første dagen og til ca 15:00 dag to. Det er
          fritt fram å bevege seg på konferanseområdet under dagen. Lunsj
          gjennomføres i to puljer mellom 11:30 og 13:30
        </div>
      </TextContainer>
      <TextContainer colSpan='2' title=' Mat og fellesmiddag'>
        <div>
          Det serveres frokost på hotellet for de som bestiller billett med
          overnatting. Det serveres også enkel frokost på konferanseområdet
          begge dagene og en meget påkostet lunch. Det er mulig å melde seg på
          felles middag for konferansens gjester på kvelden etter dag 1.
          Fellesmiddagen koster 500 kroner.
        </div>
      </TextContainer>
    </Page>
  );
}

export default Home;
