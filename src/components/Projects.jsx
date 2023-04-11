import React, { useState } from 'react'
import styled from 'styled-components'
import DejaVu from './projects/DejaVu'
import PhotoAlbum from './projects/PhotoAlbum'
import CarTracker from './projects/CarTracker'
import TenziesGame from './projects/TenziesGame'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const listData = [
  'Deja Vu',
  'Photo Album',
  'Car Tracker',
  'Tenzies Game',
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  font-weight: 300;
`

const Container = styled.div`
  height: 100vh;
  width: 64vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100vw;
    ${'' /* margin: 0 -5rem 0 5rem; */}
    flex-direction: column;
  }
`

const InfoContainer = styled.div`
  letter-spacing: 0.1rem;
  flex: 1;
  display: flex;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 768px) {
    margin: 4rem;
    gap: 0rem;
  }
`

const ListItem = styled.li`
  max-width: 100vw;
  font-size: 5vw;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #583e23;
  position: relative;

  @media (max-width: 768px) {
    font-size: 4vh;
  }

  ::after {
    content: '${(props)=>props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: #73685B;
    width: 0rem;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after{
      animation: textFade 0.3s linear both;
      @keyframes textFade {
        to {
          width: 100%;
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  flex: 1;
`

const ArrowUp = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e5e2e2;
  border-radius: 100%;
  padding: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px){
    bottom: 1.5rem;
    left: 3rem;
    z-index: 2;
  }
  
  :hover {
    background-color: #f2f2f2;
  }
`

export const Projects = () => {
  const [project, setProject] = useState('Deja Vu')
  const scrollToTop = () => {
    const aboutSection = document.getElementById('homepage')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section id="projects">
      <Container>
        <InfoContainer>
          <List>
            {listData.map(item=>(
              <ListItem key={item} text={item} onClick={()=>setProject(item)}>
                {item}
              </ListItem>
            ))}
          </List>
          <ArrowUp onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </ArrowUp>
        </InfoContainer>
        <ImageContainer>
          {project === 'Deja Vu' ?
            <DejaVu />
          : project === 'Photo Album' ?
            <PhotoAlbum /> 
          : project === 'Car Tracker' ?
            <CarTracker /> 
          : <TenziesGame />
          }
        </ImageContainer>
      </Container>
    </Section>
  )
}
