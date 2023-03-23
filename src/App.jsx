import { Contact } from './components/Contact'
import { Info } from './components/Info'
import { Projects } from './components/Projects'
import { User } from './components/User'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #73683B;
  @font-face {
    font-family: 'Gallient';
    src: url('../fonts/Gallient.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Gallient', sans-serif;
  font-size: 1rem;
  background: url('./img/bg.jpg');
  background-size: 100%;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <div>
      <Container>
        <User />
        <Info />
        <Projects />
        <Contact />
      </Container>
    </div>
  )
}

export default App
