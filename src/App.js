import { useState } from 'react'
import { Header, About, CardContainer, Footer } from './components/index'

function App() {

  return (
    <div className='text-blueish font-open mx-auto'>
      <Header />
      <About />
      <CardContainer />
      <Footer />
    </div>
  )
}

export default App
