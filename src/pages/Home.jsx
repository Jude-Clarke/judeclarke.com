import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ProjectDetails from "../components/ProjectDetails";
import styled from "styled-components";
import { Bio } from "../data/constants.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  padding: 0 16px;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;

const CTABtnContainer = styled.div`
    padding: 40px 0 160px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Home = () => {
const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
        <Navbar />
        <Body>
          <HeroSection CTA={ResumeButton}/>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
          <CTABtnContainer>
            <ResumeButton href={Bio.resume} target="_blank">My Resume</ResumeButton>
          </CTABtnContainer>
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
    </>
    
  )
}

export default Home