import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Housing from './components/housing/Housing';
import Carousel from './components/carousel/Carousel';
import slidesInfo from '../date';

function App() {
 
  return (
    <div >
     <Navbar/>
     <Intro/>
     <Housing/>
     <Carousel slidesInfo={slidesInfo}/>
    </div>
  )
}

export default App
