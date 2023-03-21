import { Contact } from "./components/Contact"
import { Info } from "./components/Info"
import { Projects } from "./components/Projects"
import { User } from "./components/User"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/1268183.jpg');
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
