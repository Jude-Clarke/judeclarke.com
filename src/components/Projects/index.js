import React from 'react';
import { useState, useRef } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';
import { useNavigate } from 'react-router-dom';


const Projects = ({openModal,setOpenModal}) => {
  const projectsSectionRef = useRef(null); // Ref for projects section

  const [toggle, setToggle] = useState('all');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleToggleClick = (option) => {
    navigate("/projects");
    setToggle(option)
  }
  return (
    <Container id="projects" ref={projectsSectionRef}>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I've worked on a wide range of applications. From design to development, here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => handleToggleClick("all")}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'React' ?
            <ToggleButton active value="react apps" onClick={() => handleToggleClick("React")}>react apps</ToggleButton>
            :
            <ToggleButton value="react apps" onClick={() => handleToggleClick("React")}>react apps</ToggleButton>
          }
          <Divider />
          {toggle === 'Node Js' ?
            <ToggleButton active value="node.js apps" onClick={() => handleToggleClick("Node Js")}>node.js apps</ToggleButton>
            :
            <ToggleButton value="node.js apps" onClick={() => handleToggleClick("Node Js")}>node.js apps</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard projectsSectionRef ={projectsSectionRef} key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.tags.includes(toggle))
            .map((project) => (
              <ProjectCard projectsSectionRef ={projectsSectionRef} key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects