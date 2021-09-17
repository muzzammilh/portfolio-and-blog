import Logo from './logo';

export default function Nav() {

  return (
    <>
      <Logo />
      <nav className="bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center space-x-1">
                <a
                  href=""
                  className="py-4 px-2 text-green-500 border-b-4 border-green-500"
                >
                  Home
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300"
                >
                  Services
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
