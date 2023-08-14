import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Housing from './components/housing/Housing';
import Carousel from './components/carousel/Carousel';
import Services from './components/services/Services';
import slidesInfo from '../date';
import Location from './components/location/Location';
import Form from './components/form/Form';



function App() {
 
  return (
    <div >
     <Navbar/>
     <Intro/>
     <Housing/>
     <Carousel slidesInfo={slidesInfo}/>
     <Services/>
     <Location/>
     <Form/>
    </div>
  )
}

export default App
