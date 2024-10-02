import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
function Images() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  return (
    <>
      <div className="h-[200vh] bg-zinc-800 pt-7">
        <div className="text-white font-poppins text-5xl mb-10 ml-16">Top Destinations</div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-6 px-16">
            {/* Card 1 */}
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200 w-60" >
                <img
                  src="src/assets/image1.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 1"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold">PHUKET, THAILAND</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">78.4K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200 w-60">
                <img
                  src="src/assets/image2.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 2"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold">BALI, INDONESIA</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">56.3K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200 w-60">
                <img
                  src="src/assets/image3.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 3"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold">MALDIVES</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">43.8K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200">
                <img
                  src="src/assets/pexels-habi-dompil-1539296-2964163.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 2"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold"> VIETNAM</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">56.3K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200 w-60">
                <img
                  src="src/assets/pexels-tracehudson-2516418.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 3"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold">TIBET</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">43.8K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200">
                <img
                  src="src/assets/pexels-habi-dompil-1539296-2964163.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 2"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold"> VIETNAM</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">56.3K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200">
                <img
                  src="src/assets/pexels-tirachard-kumtanom-112571-887828.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 2"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold"> AFRICA</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">56.3K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-lime-200">
                <img
                  src="src/assets/pexels-visit-greenland-108649-360912.jpg"
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-100 h-80 w-60"
                  alt="Destination 2"
                />
              </a>
              <a href="#" className="hover:text-lime-200 text-gray-200 font-semibold"> GREENLAND</a>
              <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1">56.3K successful visits</a>
              <div className="flex flex-row flex-wrap gap-2">
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Book</a>
                <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">Budget</a>
              </div>
            </div>
            
          </div>
        </div>
   

   <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-10 mb-10 h-80">
 <div className="p-8 md:p-12 lg:px-16 lg:py-14">
<div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
  <h2 className="text-2xl font-bold text-gray-900 md:text-2xl">
    TRAVELOUTTTT <br /> Where Your Dreams Meet Adventure!
  </h2>

  <p className="hidden text-gray-500 md:mt-4 md:block">
    Discover a world of endless possibilities with TRAVELOUTTTT, where your dreams turn into unforgettable adventures. Leave the stress behind, embrace freedom, and explore the breathtaking beauty that awaits you. Your journey begins here!
  </p>

  <div className="mt-4 md:mt-8">
    <Link to="/searchall">
      <button
        onClick={triggerConfetti}
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
       Get started
      </button>
    </Link>
  </div>
</div>
</div>

<img
alt="Adventure"
src="src/assets/pexels-michael-block-1691617-3225517.jpg"
className="h-80 w-full object-cover sm:h-2/5"
/>
</section> 
      </div>
      
    </>
  );
}

export default Images;



