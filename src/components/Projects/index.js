import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have engaged in a broad spectrum of projects, ranging from front-end and back-end development to full-stack implementations. Here are some examples of my work.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'full stack' ?
            <ToggleButton active value="full stack" onClick={() => setToggle('full stack')}>FULL-STACK</ToggleButton>
            :
            <ToggleButton value="full stack" onClick={() => setToggle('full stack')}>FULL-STACK</ToggleButton>
          }
          <Divider />
          {toggle === 'front end' ?
            <ToggleButton active value="front end" onClick={() => setToggle('front end')}>FRONT-END</ToggleButton>
            :
            <ToggleButton value="front end" onClick={() => setToggle('front end')}>FRONT-END</ToggleButton>
          }
          <Divider />
          {toggle === 'back end' ?
            <ToggleButton active value="back end" onClick={() => setToggle('back end')}>BACK-END</ToggleButton>
            :
            <ToggleButton value="back end" onClick={() => setToggle('back end')}>BACK-END</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects