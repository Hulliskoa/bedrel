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

function Utstillere() {
  return (
    <Page>
      <PartnerCard
        partnerImage={cappelen}
        onPress={() => {}}
        seminar
        stand
        partnerName='Cappelen'
        partnertext="Med sine 7 milliarder spillere er Kahoo et av nåtidens viktigste
        læringsverktøy."
      />
      <PartnerCard
        partnerImage={aschehoug}
        stand
        onPress={() => {}}
        partnerName='Aschehoug'
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
    </Page>
  );
}

export default Utstillere;
