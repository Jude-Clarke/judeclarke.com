import React, { useState, useEffect, useRef } from "react";
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, CtaButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/constants';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const mobileNavRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(!(mobileNavRef.current && mobileNavRef.current.contains(e.target))){
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [])


  useEffect(() => {
    const resizeNav = () => {
      const navDiv = document.getElementById("navbar");
      const hamburger = document.getElementById("hamburger");
      const mobileNavContainer = document.getElementById("mobileNavContainer");

      if(navDiv) {
        navDiv.style.height = (window.scrollY < 75 ? "80px" : "60px");
        navDiv.style.opacity = (window.scrollY < 75 ? "100%" : "95%");
      }
      if(hamburger) {
        hamburger.style.top = (window.scrollY < 75 ? "0" : "-4px");
      }
      if(mobileNavContainer) {
        mobileNavContainer.style.top = (window.scrollY < 75 ? "80px" : "60px");
      }
    };
    window.addEventListener("scroll", resizeNav);
    return () => window.removeEventListener("scroll", resizeNav);
    }, []);
    const isPageTop = window.scrollY < 75;

    const toggleIsOpen = () => {
      setIsOpen(prevIsOpen => !prevIsOpen);
      console.log("Is Open? ", !isOpen);
    };
    

  return (
    <Nav id="navbar">
      <NavContainer>
        <NavLogo href="/">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </span>
        </NavLogo>
        <MobileIcon id="hamburger" onClick={toggleIsOpen}>
          <FaBars
            
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <CtaButton href={Bio.resume} target="_blank">Resume</CtaButton>
        </ButtonContainer>
      </NavContainer>
      {
        isOpen && (
          <MobileMenu id="mobileNavContainer" ref={mobileNavRef} isOpen={isOpen} isPageTop={isPageTop}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Education
            </MobileLink>
            <CtaButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content"
              }}
              href={Bio.resume}
              target="_blank"
            >
              Resume
            </CtaButton>
          </MobileMenu>
        )
      }
    </Nav>
  )
}

export default Navbar
