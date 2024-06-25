import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImage from '../../images/judeProfile.webp'; 
import HeroBgAnimation from '../HeroBgAnimation';

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  align-self: flex-start;
  margin-top: 30px;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`

const Hero = (props) => {
  const { CTA } = props;
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I'm <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a 
              <Span>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true
                  }}
                />
              </Span>
            </TextLoop>
            <Subtitle>{Bio.description}</Subtitle>
            <CTAContainer>
              <CTA href={Bio.resume} target="_blank">
                My Resume
              </CTA>
            </CTAContainer>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImage} alt="photo of Jude Clarke" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero