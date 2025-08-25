import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { GifsApp } from './GifsApp.tsx'
// import { MyCounter } from './counter/components/MyCounter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
    {/* <MyCounter /> */}
  </StrictMode>,
)
