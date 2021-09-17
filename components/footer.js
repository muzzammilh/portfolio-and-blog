export default function Footer() {
  return (
    <footer>
      <div className="flex my-4 justify-center items-center flex-col">
        <h3 className="text-5xl font-bold pb-4">Get in Touch</h3>
        <div className="box w-1/2 mx-auto py-8 border-solid border-4 rounded-lg sm:w-10/12">
          <p className="font-bold text-2xl pb-16 sm:pb-8">
            Want to work together or have any questions?
          </p>
        </div>

        <div className="my-4">
          <a href="#" target="_blank" rel="noreferrer" className="px-3">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="px-3">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="px-3">
            Resume
          </a>
        </div>
        <p className="col-end-3">
          Designed and Developed by
          <span className="bg-gray-200 p-2 ml-2 rounded-sm">
            Muzzammil Hussain
          </span>
        </p>
      </div>
    </footer>
  );
}
