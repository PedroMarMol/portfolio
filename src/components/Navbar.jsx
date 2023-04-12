import React from 'react'
import styled from 'styled-components'
import AngelciaProDisplayOTF from '/fonts/Anglecia-Pro-Display.otf'

const Section = styled.div`
`

const Container = styled.div`
  width: 100vw;
  position: relative;
  top: -1rem;
  left: -20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  z-index: 2;
  @media (max-width: 768px) {
    top: 0rem;
    left: -4.5rem;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 6vw;
`

const Logo = styled.img`
  height: 25%;
  width: 25%;
  margin: -2vh -7vw -4vh -2vw;
  @media (max-width: 768px) {
    height: 35%;
    width: 35%;
    margin: -2vh -10vw -4vh -4vw;
  }
` 
const List = styled.ul`
  display: flex;
  gap: 2vw;
  list-style: none;
  margin: -20px 0;
   & > li > a {
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  justify-content: end;
  gap: 1vw;
  margin: 1vw 0;
  @media (max-width: 768px) {
    gap: 2vw;
  }
`
const Icon = styled.img`
  width: 1.2em;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 1rem;
  }
`
const Button = styled.button`
  max-width: 8rem;
  max-height: 2.4rem;
  width: 18vw;
  height: 3.5vh;
  background-image: linear-gradient(to right, #d1c9a6 0%, #73685B  51%, #d1c9a6  100%);
  margin-right: 1rem;
  text-align: center;
  transition: 0.5s;
  font-family: 'Anglecia Pro Display', sans-serif;
  @font-face {
    font-family: 'Anglecia Pro Display';
    src: url(${AngelciaProDisplayOTF}) format('opentype');
  }
  font-size: calc(0.5vw + 1vh);
  background-size: 350% auto;
  color: #583E23;            
  box-shadow: 0 0 0.5rem #d1c9a6;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #583E23;
    text-decoration: none;
  }
`



const Navbar = ({ show }) => {
  const handleClick = (event, targetElementId) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetElementId)
  if (targetElement) {
    const rect = targetElement.getBoundingClientRect()
    if (rect.top === 0) {
      window.scrollBy(0, rect.height)
    }
    targetElement.scrollIntoView({ behavior: "smooth" })
  }
  }

  return (
        <Section>
          <Container>
            <Links>
              <Logo src='../img/logo.png' />
              <List>
                <ListItem>
                  <a href='#home' onClick={(event) => handleClick(event, 'home')}>
                    Home
                  </a>
                </ListItem>
                <ListItem>
                  <a href='#about' onClick={(event) => handleClick(event, 'about')}>
                    About
                  </a>
                </ListItem>
                <ListItem>
                  <a href='#projects' onClick={(event) => handleClick(event, 'projects')}>
                    Works
                  </a>
                </ListItem>
                <ListItem>
                  <a href='#contact' onClick={(event) => handleClick(event, 'contact')}>
                    Contact
                  </a>
                </ListItem>
              </List>
            </Links>
            <Icons>
              <Icon src='../img/lens-icon.svg' onClick={(event) => handleClick(event, 'contact')} />
              <Button onClick={(event) => handleClick(event, 'contact')}>Hire now</Button>
            </Icons>
          </Container>
        </Section>
  )
}

export default Navbar