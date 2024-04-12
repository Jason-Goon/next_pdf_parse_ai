export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-600 body-font">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            &copy; {new Date().getFullYear()} Jason Goon
          </div>
          <div className="sm:flex sm:pl-10 sm:py-2 sm:mt-0 mt-4">
            {/* Assuming you might want these to be actual links in the future */}
            <a href="/about" className="text-gray-600 hover:text-gray-800 text-sm font-semibold"></a>
            <span className="inline-flex sm:ml-4 sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="/privacy" className="text-gray-600 hover:text-gray-800 ml-4 text-sm font-semibold">128K TOKEN LIMIT</a>
            </span>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
          </span>
          <div className="text-sm text-gray-500 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            Hi!
          </div>
        </div>
      </footer>
    );
  }
  