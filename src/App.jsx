import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="container">
    <header>Header</header>
    <div className="mainsection">
      <div className="lcolumn">
        <div className="hero">Theeanna Jether Alejos</div>
        <div className="sidebar">Sidebar</div>
      </div>
      <div className="rcolumn">
        <div className="main_content">Main Content</div>
        <div className="extra_content">Extra Content</div>
      </div>
    </div>
    <div className="bottom">
      <div className="related_images">Related Images</div>
      <div className="related_posts">Related Posts</div>
    </div>
    <footer>C-PCIT9 IT3A</footer>
  </div>
  )
}

export default App
