import PropTypes from 'prop-types';

const DestinationCard = ({ category, places, image1 }) => {
  return (
    <div className="relative bg-white rounded-tl-2xl rounded-xl shadow-lg w-48 h-64 mt-6 p-4 m-4">
      {/* Circular Image */}
      <div className="absolute -top-5 right-36 w-24 h-24 rounded-full border-8 border-neutral-900 flex items-center justify-evenly">
        <img src={image1} alt={category} className="w-24 h-24 object-cover rounded-full" />
      </div>
      <div className="text-center mt-0 ml-3">
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      {/* Destination Image */}
      <div className="mt-12 h-32">
        {places && places.length > 0 ? (
          <img src={places[0].image} alt={places[0].name} className="w-full h-full object-cover rounded-md" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">
            <p>No Image Available</p> {/* Fallback if no image is available */}
          </div>
        )}
      </div>

      {/* Category Name */}
      
    </div>
  );
};

DestinationCard.propTypes = {
  category: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  image1: PropTypes.string.isRequired,
};

export default DestinationCard;
