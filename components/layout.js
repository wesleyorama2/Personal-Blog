import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    /* jshint ignore:start */
      <div className="flex flex-col h-screen bg-gradient-to-br from-sky-500 to-indigo-500 subpixel-antialiased font-sans">
        <Head>
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
                partytown = {
                  lib: "/_next/static/~partytown/",
                  forward: ["dataLayer.push"],
                  debug: true
                };
              `,
            }}
          />
        </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/github-dark.min.css"></link>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js" strategy="worker"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/languages/shell.min.js" strategy="worker"></Script>
      <Script id="highlight" strategy="worker">hljs.highlightAll();</Script>
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
      />
      <Script id="google-analytics" strategy="worker">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
        `}
      </Script>
      <header>
        <nav className="bg-white py-2 md:py-4 shadow-xl shadow-sky-500/40">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex font-bold text-xl">
                <svg className="h-6 fill-current text-orange-900 hover:text-rose-500 pr-4" xmlns="http://www.w3.org/2000/svg" id="svg3365" viewBox="0 0 21.232 21.26" version="1.1" >
                  <g id="layer1" transform="translate(-364.38 -521.73)">
                  <g id="g3328" transform="matrix(.93168 0 0 .93168 -56.251 -254.07)">
                  <g id="g5179" transform="matrix(.17142 0 0 .17142 432.4 664.1)">
                  <path id="rect5085" d="m133 983.5c-7.7927 0-14.064 6.7481-14.064 15.133v57.693c0 8.3848 6.2716 15.133 14.064 15.133h89.685c7.7927 0 14.064-6.748 14.064-15.133v-57.693c0-8.3848-6.2716-15.133-14.064-15.133h-89.68zm12.925 13.262h63.835c7.7927 0 14.064 6.748 14.064 15.133v31.169c0 8.3848-6.2716 15.133-14.064 15.133h-63.835c-7.7927 0-14.064-6.7482-14.064-15.133v-31.169c0-8.3848 6.2716-15.133 14.064-15.133z"/>
                  <path id="rect5167" d="m116.34 772.22c-2.77 0-5 2.23-5 5v26.125c0 2.77 2.23 5 5 5h122.94c2.77 0 5-2.23 5-5v-26.12c0-2.77-2.23-5-5-5h-122.94zm10.375 9c4.2073 0 7.5938 3.0823 7.5938 6.9062s-3.3864 6.9375-7.5938 6.9375c-4.2073 0-7.625-3.1136-7.625-6.9375s3.4177-6.9062 7.625-6.9062zm62.719 0.53125h40.406c2.77 0 5 2.23 5 5v1.6562c0 2.77-2.23 5-5 5h-40.406c-2.77 0-5-2.23-5-5v-1.6562c0-2.77 2.23-5 5-5z" transform="translate(0,308.27)"/>
                  </g>
                  </g>
                  </g>
                </svg>
              </Link>
              <Link href="/">
                <span className="block text-orange-900 hover:text-rose-500">wbrown.dev</span>
              </Link>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
              <Link href="/blog"><a className="font-bold p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-cyan-300 hover:text-gray-700 transition-colors duration-300">Blog</a></Link>
              <Link href="/projects"><a className="font-bold p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-cyan-300 hover:text-gray-700 transition-colors duration-300">Projects</a></Link>
              <Link href="/about"><a className="font-bold p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-cyan-300 hover:text-gray-700 transition-colors duration-300">About</a></Link>
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