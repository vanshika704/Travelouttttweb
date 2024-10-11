
// import PropTypes from 'prop-types';

// const SocialMediaCard = ({ platform, image1, icon }) => {
//   return (
//     <div className="relative bg-white rounded-tl-3xl rounded-2xl shadow-lg w-48 h-64 mt-60 p-4 m-4">
//       {/* Circular Images */}
//       <div className="absolute -top-3  right-36 w-24 h-24 rounded-full border-8 border-neutral-900 overflow-hidden">
//         <img src={image1} alt="User 1" className="w-full h-full object-cover" />
//       </div>
     
//       {/* Content inside the card */}
//       <div className="mt-12 text-center">
//         <i className={`${icon} text-4xl text-gray-400`}></i> {/* Icon */}
//         <h3 className="mt-4 text-xl font-bold">{platform}</h3>
//         <p className="text-gray-500 mt-2">more &gt;</p>
//       </div>
//     </div>
//   );
// };

// // PropTypes validation
// SocialMediaCard.propTypes = {
//   platform: PropTypes.string.isRequired,  // platform must be a string and required
//   image1: PropTypes.string.isRequired,    // image1 must be a string (URL) and required
//   image2: PropTypes.string.isRequired,    // image2 must be a string (URL) and required
//   icon: PropTypes.string.isRequired       // icon must be a string (e.g., FontAwesome class name) and required
// };

// export default SocialMediaCard;
import PropTypes from 'prop-types';

const DestinationCard = ({ category, places, image1 }) => {
  return (
    <div className="relative bg-white rounded-tl-3xl rounded-2xl shadow-lg w-48 h-64 mt-6 p-4 m-4">
      {/* Circular Image */}
      <div className="absolute -top-3 right-36 w-24 h-24 rounded-full border-8 border-neutral-900 overflow-hidden">
        <img src={image1} alt={category} className="w-full h-full object-cover" />
      </div>

      {/* Content inside the card */}
      <div className="mt-12 text-center">
        <h3 className="mt-4 text-xl font-bold">{category}</h3>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          {places && places.length > 0 ? (
            places.map((place, index) => (
              <li key={index}>{place}</li>
            ))
          ) : (
            <li>No places available</li> // Fallback for no places
          )}
        </ul>
        <p className="text-gray-500 mt-2">more &gt;</p>
      </div>
    </div>
  );
};

// PropTypes validation
DestinationCard.propTypes = {
  category: PropTypes.string.isRequired,  // category must be a string and required
  places: PropTypes.arrayOf(PropTypes.string).isRequired, // places must be an array of strings and required
  image1: PropTypes.string.isRequired // image1 must be a string (URL) and required
};

export default DestinationCard;
