import { Contact } from './components/Contact'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { User } from './components/User'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { Test } from './components/Test'

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
  font-weight: 900;
  background: url('./img/bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {
  return (
    <div>
      <Container>
        <User />
        <About />
        <Projects />
        <Contact />
        <Test />
      </Container>
      <ToastContainer 
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
