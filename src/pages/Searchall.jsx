// import SocialMediaCard from "../components/aisehi";
// import image3 from '../assets/logo.png'
// function Searchall (){
//     return (<><div className="bg-neutral-900 h-screen"> <div className="flex justify-center gap-6 mt-30">
//         <SocialMediaCard
//           platform="Instagram"
//           image1={image3}
        
//           icon="fab fa-instagram"
//         />
//         <SocialMediaCard
//           platform="Twitter - X"
//           image1={image3}
       
//           icon="fab fa-twitter"
//         />
//         <SocialMediaCard
//           platform="LinkedIn"
//           image1={image3}
          
//           icon="fab fa-linkedin"
//         />
//       </div></div></>)
// }
// export default Searchall;
import SocialMediaCard from "../components/aisehi";
import DestinationCard from "../components/aisehi"; // Import your DestinationCard component
import image1 from '../assets/logo.png'; // Example image for Natural Wonders
import image2 from '../assets/logo.png'; // Example image for Cultural & Historical Sites
import image3 from '../assets/logo.png'; // Example image for Urban Destinations
import image4 from '../assets/logo.png'; // Example image for Adventure & Activities
import image5 from '../assets/logo.png'; // Example image for Unique Experiences
import image6 from '../assets/logo.png'; // Example image for Lesser-Known Gems

const destinations = [
  { category: "Natural Wonders", places: ["Yellowstone", "Maldives", "Himalayas"], image: image1 },
  { category: "Cultural & Historical Sites", places: ["Machu Picchu", "Louvre", "Angkor Wat"], image: image2 },
  { category: "Urban Destinations", places: ["New York", "Rome", "Tokyo"], image: image3 },
  { category: "Adventure & Activities", places: ["Queenstown", "Serengeti", "Costa Rica"], image: image4 },
  { category: "Unique Experiences", places: ["Napa Valley", "Bali", "Haunted Places"], image: image5 },
  { category: "Lesser-Known Gems", places: ["Hallstatt", "Faroe Islands", "Cotswolds"], image: image6 },
];

// function Searchall() {
//   return (
//     <>
//       <div className="bg-neutral-900 h-full">
//         <div className="flex justify-center gap-6 mt-0">
//           <SocialMediaCard
//             platform="Instagram"
//             image1={image3}
//             icon="fab fa-instagram"
//           />
//           <SocialMediaCard
//             platform="Twitter - X"
//             image1={image3}
//             icon="fab fa-twitter"
//           />
//           <SocialMediaCard
//             platform="LinkedIn"
//             image1={image3}
//             icon="fab fa-linkedin"
//           />
//         </div>

//         <div className="flex flex-wrap justify-center mt-10 gap-6">
//           {destinations.map((category, index) => (
//             <DestinationCard 
//               key={index} 
//               category={category.category} 
//               places={category.places} 
//               image1={category.image} // Pass the image for each destination
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Searchall;
function Searchall() {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <div className="flex justify-center gap-6 mt-10">
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
              image1={category.image} // Pass the category image if needed
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Searchall;