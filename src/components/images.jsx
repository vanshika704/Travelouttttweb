function Images() {
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Images;
