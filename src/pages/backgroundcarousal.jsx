import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from '../assets/pexels-tirachard-kumtanom-112571-887828.jpg';
import img2 from '../assets/pexels-catiamatos-1072179.jpg';
import img3 from '../assets/pexels-ekrulila-2305765.jpg';
import img4 from '../assets/pexels-habi-dompil-1539296-2964163.jpg';
import img5 from '../assets/pexels-kelly-1179532-12496258.jpg';
import img6 from '../assets/pexels-r-dell-706183211-26997553.jpg';
import img7 from '../assets/pexels-samkolder-2387877.jpg';
import img8 from '../assets/pexels-tracehudson-2516418.jpg';
import logo from '../assets/TRAVELOUTTTT__4_-removebg-preview.png';
import Navbar from './navbar';

const Gallery = () => {
    const items = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ];
  
    const renderedItems = items.map((item, index) => (
      <img key={index} src={item} alt={`image-${index}`} className="w-full h-[50vh] sm:h-[50vh] lg:h-[80vh] object-cover" />
    ));
  
    return (<div >
      <div className="gallery-container relative w-full h-[40vh] sm:h-[40vh] lg:h-[80vh]  items-center justify-center">
     
   
        <AliceCarousel
          animationType="fadeout"
          animationDuration={5000}
          disableButtonsControls
          disableDotsControls
          infinite
          autoPlay
          mouseTracking
          items={renderedItems}
        /> 
        <div className="overlay-content absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center p-4 bg-black bg-opacity-50 text-white">
        <Navbar/>
          <div className="companyname mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
          
            <img src={logo} alt="logo" className="w-auto mt-0 h-80 sm:w-20 lg:w-96" />
          </div>
          <div className="discover text-lg sm:text-base lg:text-lg mt-0 mb-10 font-poppins">
            Discover Life : Don&apos;t Listen To What They Say, Go See
          </div>
          <div className="flex gap-4">
            <button className="gallery-button1 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-poppins">
              Contact us
            </button>
            <button className="gallery-button2 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-poppins">
              Book Now
            </button>
          </div>
        </div>
        
      </div>
      <div className='h-32 w-full bg-slate-500/50'>.</div>
      </div>
     
    );
  };

export default Gallery;
