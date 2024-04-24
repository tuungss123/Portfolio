import './App.css'
import About from './pages/About/index.jsx'
import Nav from './pages/Nav/index.jsx'
import Profile from './pages/Profile/index.jsx'
import Contact from './pages/Contact/index.jsx'
function App() {
  

  return(<>
    <div className='bg-image '>
    <Nav/>
    <Profile/>
    </div>
    <About/>
    <Contact />

    
    </>
  )
}

export default App
