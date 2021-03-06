import React from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import FormScreen from './Screens/FormScreen'
import HomeScreen from './Screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
      <Container>
      <Route path='/form' component={HomeScreen} exact/>   
     <Route path='/' component={FormScreen} exact/>
      </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
