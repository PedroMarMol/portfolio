import React from 'react'
import styled from 'styled-components'

const listData = [
  'Development',
  'Product Design',
  'Web Design',
  'Software Development',
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #583e23;
`

const ImageContainer = styled.div`
  flex: 1;
`


export const Projects = () => {
  return (
    <Section>
      <Container>
        <Info>
          <List>
            {listData.map(item=>(
            <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Info>
        <ImageContainer></ImageContainer>
      </Container>
    </Section>
  )
}
