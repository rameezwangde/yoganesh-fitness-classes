import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import YogaMudra from './YogaMudra'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <YogaMudra />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
