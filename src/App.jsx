import React, { useEffect, useState } from 'react';
import Logo from './assets/Logo.svg';
import Web from './assets/Web Development Bootcamp.svg';
import Girl from './assets/pgirl.png';
import '/src/App.css';
import Footer from './footer'
import 'animate.css';


import BackgroundImage from '/6.svg';
import S6 from '/s6.svg';


export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set your breakpoint for mobile here
    };

    // Initial check
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="w-screen flex items-center flex-col justify-center p-1 border back">
      <div className="w-full flex justify-center  items-center">
  <div className="bg-gray-950 w-screen relative left-4  h-3"></div>
  <svg width="67" height="86" viewBox="0 0 67 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.267582 -1.38844L86.92 23.7522L25.4082 85.264L0.267582 -1.38844Z" fill="#0C0A09"/>
  </svg>
</div>

        <div className="flex items-start justify-start w-full p-4">
          <img src={Logo} alt="Logo" />
        </div>
        <div className='flex md:hidden flex-row font-Afacad  md:justify-between  px-[25px] pt-[45px] 'style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: isMobile ? 'bottom' : 'right',
            backgroundSize: 'contain',
            overflow: 'hidden', 
          }}>
          <div className='flex flex-col '>
            <h1 className='text-black  text-3xl md:text-8xl font-semibold'>
              {' '}
              <span className='text-6xl md:text-9xl'>W</span>eb development{' '}
              <span className='text-slate-600'>Bootcamp</span>
            </h1>
            <p className='text-md md:text-2xl pt-[25px]'>
              Want to build and design websites from scratch? 6lacktech offers
              interactive courses tailored to beginners and advanced learners
              alike. Choose your path:
            </p>
          </div>
          <img
            src={Girl}
            alt='Lady'
            className='relative w-48 md:w-96 md:-right-0'
          />
        </div>
        <div
          className="bg-container  hidden md:flex items-center justify-center w-full p-4"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: isMobile ? 'bottom' : 'right',
            backgroundSize: 'contain',
            overflow: 'hidden', 
          }}
        >
          <div className="flex flex-col items-center justify-center md:space-x-64 md:flex-row">
            <div className="space-y-10 ">
              <div className="w-full animate__animated animate__lightSpeedInRight">
                <img src={Web} alt="Web Development Bootcamp" className='md:-ml-4 -ml-2' />
              </div>
              <div className="md:w-[640px] w-[350px] md:space-x-8 tracking-wider leading-6 animate__animated animate__lightSpeedInLeft text-xl">
                <p className='tracking-wider leading-10'>
                  Want to build websites from scratch? 6lacktech offers beginner and advanced courses 
                  in frontend, backend, and full-stack development with HTML, CSS, Tailwindcss,JavaScript, React, Python, Django, Node.js, and more.
                </p>
              </div>
            </div>
            <div className="md:ml-8 mt-8 md:mt-0 animate__animated animate__flip">
              <img src={Girl} alt="Girl" className="md:w-[320px]" />
            </div>
          </div>
        </div>
        <div className=" flex items-center w-full mt-16 justify-center md:items-start md:justify-start">
          <p className='text-[#020617] text-5xl text-center md:ml-6 md:-mb-28 font-extrabold '>Frontend <span className='text-[#475569]'>Development</span></p>
        </div>
       
        <div className='grid grid-cols-2 md:grid-cols-3 my-10 relative font-Afacad gap-3 mb-[11px] pt-9 mx-[25px] items-baseline'>
  {/* First card */}
  <div
    className='p-3 md:p-6 bg-slate-950 text-white space-y-2 hover:font-bold rounded-md hover:bg-black/50 group'
    style={{
      backgroundImage: `url(${S6})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    }}
  >
    <h1 className='font-medium text-sm md:text-xl'>HTML, CSS,Vanilla JavaScript</h1>
    <p className='text-sm md:text-xl'>Duration: 6 Weeks</p>
    <h1 className='text-2xl md:text-4xl font-medium '>GHC 300</h1>
    <p className='text-sm md:text-xl'>
      Build your website from scratch, no prior knowledge needed!
    </p>
    <a href='https://paystack.com/pay/6lacktech' target='_blank'>
      <button className='p-3 rounded-xl border-2 flex items-center border-slate-800 group-hover:bg-black'>
        Register
      </button>
    </a>
  </div>

  {/* Second card */}
  <div
    className='p-3 md:p-6 bg-slate-950 text-white space-y-2 hover:font-bold rounded-md hover:bg-black/50 group items-baseline'
    style={{
      backgroundImage: `url(${S6})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    }}
  >
    <h1 className='font-medium text-sm md:text-xl'>HTML, CSS, JavaScript, Design</h1>
    <p className='text-sm md:text-xl'>Duration: 8 Weeks</p>
    <h1 className='text-2xl md:text-4xl font-medium '>GHC 500</h1>
    <p className='text-sm md:text-xl'>
      Learn coding plus design with Figma for a professional edge.
    </p>
    <a href='https://paystack.com/pay/6lacktech1' target='_blank'>
      <button className='p-3 rounded-xl border-2 flex items-center border-slate-800 group-hover:bg-black'>
        Register
      </button>
    </a>
  </div>

  {/* Third card */}
  <div
    className='p-3 md:p-6 bg-slate-950 text-white space-y-2 hover:font-bold hover:bg-black/50 rounded-md group items-baseline'
    style={{
      backgroundImage: `url(${S6})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    }}
  >
    <h1 className='font-medium text-sm md:text-xl'>HTML, CSS, Js, Design, & React</h1>
    <p className='text-sm md:text-xl'>Duration: 10 Weeks</p>
    <h1 className='text-2xl md:text-4xl font-medium '>GHC 800</h1>
    <p className='text-sm md:text-xl'>
      Elevate your skills with React for dynamic websites.
    </p>
    <a href='https://paystack.com/pay/6lacktech2' target='_blank'>
      <button className='p-3 rounded-xl border-2 flex items-center border-slate-800 group-hover:bg-black'>
        Register
      </button>
    </a>
  </div>
</div>
        <div className=" flex items-center w-full mt-16 justify-center md:items-start md:justify-start">
          <p className='text-[#020617] text-5xl text-center md:ml-6 md:-mb-28 font-extrabold '>Backend <span className='text-[#475569]'>Development--Coming soon</span></p>
        </div>
       
        <div className='grid grid-cols-2 md:grid-cols-3 my-10 relative font-Afacad gap-3 mb-[11px] pt-9 mx-[25px] items-baseline'>
  {/* First card */}
  <div
    className='p-3 md:p-6 bg-slate-950 text-white space-y-2 hover:font-bold rounded-md hover:bg-black/50 group'
    style={{
      backgroundImage: `url(${S6})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    }}
  >
    <h1 className='font-medium text-sm md:text-xl'>Node.js, Express.js, MongoDB</h1>
    <p className='text-sm md:text-xl'>Duration: 6 Weeks</p>
    <h1 className='text-2xl md:text-4xl font-medium '>GHC 400</h1>
    <p className='text-sm md:text-xl'>
    Get started with backend development using Node.js.
    </p>
    <a href='#' >
      <button className='p-3  rounded-xl border-2 flex items-center border-slate-800 group-hover:bg-black'>
        Register
      </button>
    </a>
  </div>

  {/* Second card */}
  <div
    className='p-3 md:p-6 bg-slate-950 text-white space-y-2 hover:font-bold rounded-md hover:bg-black/50 group items-baseline'
    style={{
      backgroundImage: `url(${S6})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    }}
  >
    <h1 className='font-medium text-sm md:text-xl'>Python, Django, SQL DB</h1>
    <p className='text-sm md:text-xl'>Duration: 8 Weeks</p>
    <h1 className='text-2xl md:text-4xl font-medium '>GHC 600</h1>
    <p className='text-sm md:text-xl'>
    Master backend with Python and Django for robust apps.
    </p>
    <a href='#' >
      <button className='p-3 rounded-xl border-2 flex items-center border-slate-800 group-hover:bg-black'>
        Register
      </button>
    </a>
  </div>

  {/* Third card */}
  <div
    className='p-3 md:p-6 bg-slate-950 text-white space-y-2 hover:font-bold hover:bg-black/50 rounded-md group items-baseline'
    style={{
      backgroundImage: `url(${S6})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      overflow: 'hidden',
    }}
  >
    <h1 className='font-medium text-sm md:text-xl'>REST APIs, Cloud Deployment</h1>
    <p className='text-sm md:text-xl'>Duration: 10 Weeks</p>
    <h1 className='text-2xl md:text-4xl font-medium '>GHC 900</h1>
    <p className='text-sm md:text-xl'>
   Master, Develop and deploy scalable backend systems .
    </p>
    <a href='#'>
      <button className='p-3 rounded-xl border-2 flex items-center border-slate-800 group-hover:bg-black'>
        Register
      </button>
    </a>
  </div>
</div>
<div className="flex items-center justify-center bg-[#020617] w-full  my-20 md:w-[1050px] text-white font-extrabold rounded-lg">
  <p className='md:tracking-wide md:leading-10 text-md md:text-3xl  animate__animated  animate__bounce'>Join Us Now and bring your website ideas to life!</p>
</div>
<div className="flex items-start justify-start">
  <a href=""></a>
</div>
<Footer />
      </div>
    </div>
  );
}
