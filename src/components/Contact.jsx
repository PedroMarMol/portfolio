import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import MapChart from './MapChart'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AngelciaProDisplayOTF from '/fonts/Anglecia-Pro-Display.otf'
import SocialMediaButtons from './SocialMediaButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-left: 20rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: center; // horizontally center child elements
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    top: -30%;
    max-width: 80vw;
    margin: 2.5rem auto;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.1);
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Input = styled.input`
  padding: 1.2rem;
  background-color: #e8e6e6;
  border: none;
  border-radius: 0.3rem;
`

const Text = styled.textarea`
  padding: 1.2rem;
  background-color: #e8e6e6;
  border: none;
  border-radius: 0.3rem;
`

const Button = styled.button`
  width: 100%;
  min-height: 2.2rem;
  background-image: linear-gradient(to right, #d1c9a6 0%, #73685B  51%, #d1c9a6  100%);
  text-align: center;
  transition: 0.5s;
  font-family: 'Anglecia Pro Display', sans-serif;
  @font-face {
    font-family: 'Anglecia Pro Display';
    src: url(${AngelciaProDisplayOTF}) format('opentype');
  }
  font-size: calc(0.5vw + 0.8vh);
  background-size: 350% auto;
  color: #583E23;
  box-shadow: 0 0 0.5rem #d1c9a6;
  border-radius: 10px;
  display: block;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background-position: right center;
    color: #583E23;
    text-decoration: none;
  }
`

const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  margin-top: 0;

  @media (max-width: 768px) {
    & > div {
      height: 50%;
    }
  }
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
    bottom: -15rem;
  }
  
  :hover {
    background-color: #f2f2f2;
  }
`


export const Contact = () => {
  const ref = useRef()
  const [error, setError] = useState(true)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs
    .sendForm(
      'service_v661osb',
      'template_8ow4dn9',
      ref.current,
      '_YiWrhRivP2bgAPpe'
    )
    .then((result) => {
        toast.success(
          <>
            Your message has been sent. <br /> 
            I will contact you soon :)
          </>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          html: true
        })
        setError(false)
    }, (error) => {
        toast.error(error.text,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
        setError(true)
    })
  }

  const scrollToTop = () => {
    const aboutSection = document.getElementById('homepage')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <Section id="contact">
      <Container>
        <InfoContainer>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact me</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' required minLength='4' />
            <Text placeholder='Write your message' name='message' rows={12} required />
            <Button type='submit'>Send</Button>
          </Form>
          <SocialMediaButtons />
          <p style={{ fontFamily: 'DM Sans', color: 'black' }}>martosmoleropedro@gmail.com</p>
          <ArrowUp onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </ArrowUp>
        </InfoContainer>
        <ImageContainer>
          <MapChart />
        </ImageContainer>
      </Container>
    </Section>
  )
}