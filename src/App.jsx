import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import YogaMudra from './YogaMudra'
import SuccessStories from './pages/SuccessStories'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<YogaMudra />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
