import Logo from './logo';

export default function Nav() {

  return (
    <>
      <Logo />
      <nav className="bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center space-x-3">
                <a
                  href=""
                  className="py-2 px-2 text-c1-900 border-b-2 border-c1-900"
                >
                  Home
                </a>
                <a
                  href=""
                  className="py-2 px-2 mb-1 text-c1-400 hover:text-c1-900 transition duration-300"
                >
                  Posts
                </a>
                <a
                  href=""
                  className="py-2 px-2 mb-1 text-c1-400 hover:text-c1-900 transition duration-300"
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
