import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Critical Acclaim</h1>
      <p>The Sun's Tirade peaked at spot 13 on Billboard 200.</p>
      <FeatureButton href= "https://www.billboard.com/music/isaiah-rashad/chart-history/TSL/song/992461">
        Proof
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
