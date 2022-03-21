import Image from 'next/image'

export default function Home() {
  return (
    /* jshint ignore:start */
    <div className="w-full h-full">
      <div className="max-w-screen-md px-10 py-6 mx-4 mt-20 bg-white rounded-lg shadow-md shadow-indigo-500/50 md:mx-auto border-1">
        <div className="flex flex-col items-start w-full m-auto sm:flex-row">
          <div className="flex mx-auto sm:mr-10 sm:m-0">
            <div className="items-center justify-center w-20 h-20 m-auto mr-4 sm:w-32 sm:h-32">
              <Image alt="profile-image" width={200} height={200}
                src="https://media-exp1.licdn.com/dms/image/C4E03AQENiCIZUvbzew/profile-displayphoto-shrink_200_200/0/1556145514106?e=2147483647&v=beta&t=Sagg4GjHQH8cuIdyd5oTQRK3p0IQSFLbT7v4cqYWXEU"
                className="object-cover w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32" />
            </div>
          </div>
          <div className="m-auto pb-16 lg:pb-0 w-4/5 lg:w-full flex flex-wrap justify-evenly items-center">
            <a className="link" href="https://github.com/wesleyorama2"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
            <a className="link" href="https://unsplash.com/@wesleyorama"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Unsplash</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg></a>
            <a className="link" href="https://www.youtube.com/channel/UCR-bpMwD1TmNiUZ_hZCtpug"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>
            <a className="link" href="https://www.linkedin.com/in/cheesestick/"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          </div>
        </div>
        <div className="w-full pt-5">
          <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">Wesley Brown</h1>
          <p className="text-xs text-gray-500 md:text-sm">Fledgling Developer, Staff DevOps, Occasional Photographer</p>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="text-sm text-gray-800 md:text-base whitespace-pre-line">
              <br></br>
              Hey, I am a DevOps engineer and fair-weather photographer currently living in the southern United States.
              <br></br>
              <br></br>
              I plan on sharing my personal projects, and opensource work, on this page as a way to keep everything in one place. 
            </p>
        </div>
      </div>
    </div>
    /* jshint ignore:end */
  );
}
