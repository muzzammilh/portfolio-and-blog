export default function Nav() {
  return (
    <>
      <nav className="bg-white flex items-center mt-2 justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center space-x-3">
                <a href="" className="py-2 px-2 border-b-2 border-gray-800">
                  Home
                </a>
                <a
                  href=""
                  className="py-2 px-2 mb-1 text-gray-500 hover:text-gray-800 transition duration-300"
                >
                  Posts
                </a>
                <a
                  href=""
                  className="py-2 px-2 mb-1 text-gray-500 hover:text-gray-800 transition duration-300"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
