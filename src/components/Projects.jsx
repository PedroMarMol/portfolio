import React from 'react'
import styled from 'styled-components'

const listData = [
  'Development',
  'Product Design',
  'Web Design',
  'Software Dev',
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  width: 64vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) { ${'' /* needs a fix when animation is added */}
    width: 100vw;
    margin: 0 -5rem 0 5rem;
  }
`

const InfoContainer = styled.div`
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
   font-size: 3.7vh;  ${'' /* needs a fix when animation is added */}
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


export const Projects = () => {
  return (
    <Section>
      <Container>
        <InfoContainer>
          <List>
            {listData.map(item=>(
            <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </InfoContainer>
        <ImageContainer></ImageContainer>
      </Container>
    </Section>
  )
}
