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
    <img key={index} src={item} alt={`image-${index}`} className="w-full h-[80vh] object-cover" />
  ));

  return (
    <div className="gallery-container relative w-full h-[50vh] sm:h-[50vh] lg:h-[80vh] flex items-center justify-center">
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
      <div className="overlay-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50 text-white">
        <div className="companyname text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Forest Hill</div>
        <div className="discover text-sm sm:text-base lg:text-lg mb-6">
          Discover Tranquil Luxury: A Mountain Retreat in the Heart of Nature&apos;s Embrace
        </div>
        <div className="flex gap-4">
          <button className="gallery-button1 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg">
            Contact us
          </button>
          <button className="gallery-button2 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
