
import DestinationCard from "../components/aisehi"; 
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 
import image4 from '../assets/logo.png'; 
import image5 from '../assets/pexels-ekrulila-2305765.jpg'; 
import image6 from '../assets/pexels-michael-block-1691617-3225517.jpg'; 
import image7 from '../assets/pexels-habi-dompil-1539296-2964163.jpg'
const destinations = [
  { 
    category: "Natural Wonders", 
    places: [{ name: "Yellowstone", image: image1 }], 
    image: image4
  },
  { 
    category: "Cultural & Historical Sites", 
    places: [{ name: "Machu Picchu", image: image2 }],
    image: image4
  },
  { 
    category: "Urban Destinations", 
    places: [{ name: "New York", image: image3 }],
    image: image4
  },
  { 
    category: "Adventure & Activities", 
    places: [{ name: "Queenstown", image: image7 }],
    image: image4 
  },
  { 
    category: "Unique Experiences", 
    places: [{ name: "Napa Valley", image: image5 }],
    image: image4
  },
  { 
    category: "Lesser-Known Gems", 
    places: [{ name: "Hallstatt", image: image6 }],
    image: image4 
  },
];

function Searchall() {
  return (
    <div className="bg-neutral-900 h-[220vh] ">
     <div className="text-5xl ml-20 mb-20  text-slate-50 font-bold ">Categories to explore....</div>

      <div className="flex flex-wrap justify-center mt-0 gap-6">
        {destinations.map((category, index) => (
          <DestinationCard 
            key={index} 
            category={category.category} 
            places={category.places} 
            image1={category.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default Searchall;
