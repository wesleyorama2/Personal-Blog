export default function Layout({ children }) {
  return (
    /* jshint ignore:start */
      <div className="flex flex-col h-screen bg-gradient-to-br from-sky-500 to-indigo-500 subpixel-antialiased font-sans">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css"></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/languages/shell.min.js"></script>
      <header>
        <nav className="bg-white py-2 md:py-4 shadow-xl shadow-sky-500/40">
          <div className="container px-4 mx-auto md:flex md:items-center">

            <div className="flex justify-between items-center">
              <a href="/" className="flex font-bold text-xl text-indigo-600">
                <svg className="h-6 fill-current text-orange-900 hover:text-rose-500 pr-4" role="img" xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 463.89 438.88" version="1.0"> 
                  <g id="layer1" transform="translate(-42.339 -276.34)">
                    <path id="rect2391" d="m437.15 499.44zl-162.82-144.19-162.9 144.25v206.12c0 5.33 4.3 9.6 9.62 9.6h101.81v-90.38c0-5.32 4.27-9.62 9.6-9.62h83.65c5.33 0 9.6 4.3 9.6 9.62v90.38h101.84c5.32 0 9.6-4.27 9.6-9.6v-206.18zm-325.72 0.06z"/>
                    <path id="path2399" d="m273.39 276.34l-231.05 204.59 24.338 27.45 207.65-183.88 207.61 183.88 24.29-27.45-231-204.59-0.9 1.04-0.94-1.04z"/>
                    <path id="rect2404" d="m111.43 305.79h58.57l-0.51 34.69-58.06 52.45v-87.14z"/>
                  </g>
                </svg> 
                <span className="block text-orange-900 hover:text-rose-500">Brown.Haus</span>
              </a>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
              <a href="/blog" className="font-bold p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-cyan-300 hover:text-gray-700 transition-colors duration-300">Blog</a>
              <a href="/projects" className="font-bold p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-cyan-300 hover:text-gray-700 transition-colors duration-300">Projects</a>
              <a href="/about" className="font-bold p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-cyan-300 hover:text-gray-700 transition-colors duration-300">About</a>
            </div>
          </div>
        </nav>
      </header>
      <div className="py-6 md:py-12 flex-auto overflow-auto">
        <main className='md:container md:m-auto'>{children}</main>
      </div>
      {/* <footer className='bottom-auto shadow-xl shadow-indigo-500/50 mix-blend-multiply bg-white'>
        <div className='container mx-auto flex justify-center'>
          &copy; Wesley Brown
        </div>
      </footer> */}
    </div>
    /* jshint ignore:end */
  );
}