import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll} from 'react-scroll'

const Section = styled.div`
  display: flex;
  justify-content: center;
  max-height: 6rem;
`
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 1vw;
  font-size: 1.4rem;
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
` 
const List = styled.ul`
  display: flex;
  gap: 2vw;
  list-style: none;
  margin: -20px 0;
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  justify-content: end;
  gap: 2vw;
  margin: 1vw 0;
`
const Icon = styled.img`
  width: 1.3em;
  cursor: pointer;
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
  font-weight: 900;
  font-family: 'Gallient', sans-serif;
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


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src='../img/logo.png' />
          <List>
            <ListItem>
              <Link
                activeClass='active'
                to='homepage'
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
              >
                Works
              </Link>
            </ListItem>
            <ListItem>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src='../img/lens-icon.svg' />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar