import SocialMediaCard from "../components/aisehi"; // Assuming this is your social media card component
import DestinationCard from "../components/aisehi"; // Import your modified DestinationCard component
import image1 from '../assets/logo.png'; // Example image for Natural Wonders
import image2 from '../assets/logo.png'; // Example image for Cultural & Historical Sites
import image3 from '../assets/logo.png'; // Example image for Urban Destinations
import image4 from '../assets/logo.png'; // Example image for Adventure & Activities
import image5 from '../assets/logo.png'; // Example image for Unique Experiences
import image6 from '../assets/logo.png'; // Example image for Lesser-Known Gems

const destinations = [
  { 
    category: "Natural Wonders", 
    places: [{ name: "Yellowstone", image: image1 }], 
    image: image1 
  },
  { 
    category: "Cultural & Historical Sites", 
    places: [{ name: "Machu Picchu", image: image2 }],
    image: image2 
  },
  { 
    category: "Urban Destinations", 
    places: [{ name: "New York", image: image3 }],
    image: image3 
  },
  { 
    category: "Adventure & Activities", 
    places: [{ name: "Queenstown", image: image4 }],
    image: image4 
  },
  { 
    category: "Unique Experiences", 
    places: [{ name: "Napa Valley", image: image5 }],
    image: image5 
  },
  { 
    category: "Lesser-Known Gems", 
    places: [{ name: "Hallstatt", image: image6 }],
    image: image6 
  },
];

function Searchall() {
  return (
    <div className="bg-neutral-900 h-[220vh] ">
      <div className="flex justify-center gap-6 mt-0">
        <SocialMediaCard
          platform="Instagram"
          image1={image3}
          icon="fab fa-instagram"
        />
        <SocialMediaCard
          platform="Twitter - X"
          image1={image3}
          icon="fab fa-twitter"
        />
        <SocialMediaCard
          platform="LinkedIn"
          image1={image3}
          icon="fab fa-linkedin"
        />
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {destinations.map((category, index) => (
          <DestinationCard 
            key={index} 
            category={category.category} 
            places={category.places} 
            image1={category.image} // Pass the circular image
          />
        ))}
      </div>
    </div>
  );
}

export default Searchall;
