import './App.css'
import About from './pages/About/index.jsx'
import Nav from './pages/Nav/index.jsx'
import Profile from './pages/Profile/index.jsx'
import Contact from './pages/Contact/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll } from 'react-scroll';
import Works from './pages/Works/index.jsx'

function App() {
  
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 700, 
      smooth: 'easeInOutQuart', 
    });
  }
  return(<>
    <div className='bg-image '>
    <Nav/>
    <Profile/>
    </div>
    <About/>
    <Works/>
    <Contact />
    <div className='scroll-to-top'>
      <button onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
    </>
  )
}

export default App
