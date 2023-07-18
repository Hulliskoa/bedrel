import React from "react";
import Page from "../layout/Page";
import PartnerCard from "../components/partnerCard";
import cappelen from "../components/images/Sponsor 1Logogs.svg";
import aschehoug from "../components/images/Sponsor 2Logogs.svg";
import learnlab from "../components/images/Sponsor 3Logogs.svg";
import googleEdu from "../components/images/Sponsor 4Logogs.svg";
import fagbokforlaget from "../components/images/Sponsor 5Logogs.svg";
import creaza from "../components/images/Sponsor 6Logogs.svg";
import skolon from "../components/images/Sponsor 7Logogs.svg";
import microsoft from "../components/images/Sponsor 8Logogs.svg";
import pendel from "../components/images/Sponsor 9Logogs.svg";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import TextContainer from "../components/text/TextContainer";
import { Link } from "react-router-dom";

function Utstillere() {
  return (
    <Page>
      <div className='col-span-12 mb-6 font-semibold text-6xl'>
        Ustillere og seminarer
      </div>
      <PartnerCard
        partnerImage={cappelen}
        onPress={() => {}}
        seminar
        stand
        partnerName='Cappelen'
        partnertext='Med sine 7 milliarder spillere er Kahoo et av nåtidens viktigste
        læringsverktøy.'
      />
      <PartnerCard
        partnerImage={aschehoug}
        stand
        onPress={() => {}}
        partnerName='Aschehoug'
        partnertext='Med sine 7 milliarder spillere er Kahoo et av nåtidens viktigste
        læringsverktøy.'
      />
      <PartnerCard
        partnerImage={learnlab}
        onPress={() => {}}
        partnerName='LearnLab'
      />
      <PartnerCard
        partnerImage={googleEdu}
        onPress={() => {}}
        partnerName='Google for Education '
      />

      <div className='col-span-12 mt-14 sm:mt-[202px] mx-auto'>
        <Link to='program'>
          <SecondaryButton title='Se hele programmet' onPress={() => {}} />
        </Link>
      </div>
    </Page>
  );
}

export default Utstillere;
