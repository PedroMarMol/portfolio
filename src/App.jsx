import { User } from './components/User'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'typeface-dm-sans'

const Container = styled.div`
  height: 100vh;
  color: #73683B;
  overflow: scroll;
  scroll-snap-type: y mandatory;
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
  ::-webkit-scrollbar {
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