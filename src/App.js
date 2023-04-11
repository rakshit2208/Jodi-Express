// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wedding from "./Wedding";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Banner from "./Banner";
import Navbar from "./Navbar";
import WhyUs from "./WhyUs";
import Map from "./Map";
// import Slider from "./Slider";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Banner/> */}
      {/* <Wedding/> */}
      {/* <About/> */}
      {/* <WhyUs/> */}
      {/* <ContactUs/> */}
      {/* <Map/> */}
      {/* <Footer/> */}
      {/* <Slider/> */}

      <Router>

      <Navbar/>
      <Banner/>
      <Wedding/>
      <About/>
      <WhyUs/>
      <ContactUs/>
      <Map/>
      <Footer/>


      <Routes>
   
       {/* <Route exact path='/' element={<Banner/>}  ></Route>
       <Route exact path='/about' element={<About/>}  ></Route>
       <Route exact path='/wedding' element={<Wedding/>}  ></Route>
       <Route exact path='/contact' element={<ContactUs/>}  ></Route>
       <Route exact path='/whyus' element={<WhyUs/>}  ></Route>
       <Route exact path='/login' element={<Login/>}  ></Route> */}
       



      </Routes>

      {/* <Footer/> */}
 


       </Router>
     
 
    </div>
  );
}

export default App;
