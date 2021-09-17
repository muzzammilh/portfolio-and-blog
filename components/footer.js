export default function Footer() {
  return (
    <footer>
      <div className="flex my-4 justify-center items-center flex-col text-lg">
        <div className="my-4">
          <a href="#" target="_blank" rel="noreferrer" className="px-3">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer" className="px-3">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer" className="px-3">Resume</a>
        </div>
        <p className="col-end-3">
          Designed and Developed by<span className="bg-gray-200 p-2 ml-2 rounded-sm">Muzzammil Hussain</span>
        </p>
      </div>
    </footer>
  );
}
