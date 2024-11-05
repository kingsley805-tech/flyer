import blacktech from './assets/6lack.svg';
import polygon from './assets/Polygon.svg';
import illuz from './assets/young.png';

export default function App() {
  return (
    <div className='bg-mobile'>
      <div className=' relative py-[25px]flex flex-col bg-gradient-to-t from-gray-400'>
        {/* Border thick line */}
        <div className='border-4 my-3 border-gray-950'></div>
        <div className=' flex items-center justify-between '>
          <div className=' relative mx-[31px]'>
            <img src={blacktech} alt='logo' />
          </div>
          {/* Polygon */}
          <div className='relative '>
            <img src={polygon} alt='ploygon svg' className='-mt-12' />
          </div>
        </div>
        {/* HEader */}
        <div className='flex flex-row font-Afacad  md:justify-between  px-[25px] pt-[45px] '>
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
            src={illuz}
            alt='Lady'
            className='relative w-48 md:w-96 md:-right-0'
          />
        </div>
        {/* first card */}
        <div className='grid grid-cols-2 md:grid-cols-3 relative  font-Afacad gap-3 mb-[11px] pt-9 mx-[25px] items-baseline'>
          {/* first card */}
          <div className='p-3 md:p-6 bg-slate-950 text-white space-y-2 rounded-md'>
            <h1 className='font-medium text-sm md:text-xl'>
              HTML, CSS, JavaScript
            </h1>
            <p className='text-sm md:text-xl'>Duration: 6 Weeks</p>
            <h1 className='text-2xl md:text-4xl font-medium '>GHC 300</h1>
            <p className='text-sm md:text-xl'>
              Build your website from scratch, no prior knowledge needed!
            </p>
            <a href='https://paystack.com/pay/6lacktech' target='_blank'>
              <button className='p-3 rounded-xl border-2 flex items-center hover:bg-slate-800  border-slate-800'>
                Register{' '}
              </button>
            </a>
          </div>
          {/* second card */}
          <div className='p-3 md:p-6 bg-slate-950  bg-[] text-white space-y-2 rounded-md items-baseline'>
            <h1 className='font-medium text-sm md:text-xl'>
              HTML, CSS, JavaScript, Design
            </h1>
            <p className='text-sm md:text-xl'>Duration: 8 Weeks</p>
            <h1 className='text-2xl md:text-4xl font-medium '>GHC 500</h1>
            <p className='text-sm md:text-xl'>
              Learn coding plus design with Figma for a professional edge.
            </p>
            <a href='https://paystack.com/pay/6lacktech1' target='_blank'>
              <button className='p-3 rounded-xl border-2 flex items-center hover:bg-slate-800  border-slate-800'>
                Register{' '}
              </button>
            </a>
          </div>
          {/* Third card */}
          <div className=' p-3 md:p-6 bg-slate-950 text-white space-y-2 rounded-md items-baseline'>
            <h1 className='font-medium text-sm md:text-xl'>
              HTML, CSS, JavaScript, Design, & React Framework
            </h1>
            <p className='text-sm md:text-xl'>Duration: 10 Weeks</p>
            <h1 className='text-2xl md:text-4xl font-medium'>GHC 800</h1>
            <p className='text-sm md:text-xl '>
              Take your skills to the next level with React for dynamic
              websites.{' '}
            </p>
            <a href='https://paystack.com/pay/6lacktech2' target='_blank'>
              <button className='p-3 rounded-xl border-2 flex items-center hover:bg-slate-800  border-slate-800'>
                Register{' '}
              </button>
            </a>
          </div>
        </div>
        <div className='items-center flex justify-center rounded-md text-pretty  my-5 font-Afacad p-3 bg-slate-950 text-white font-semibold mx-[25px]'>
          <h1 className='text-xl md:text-4xl'>
            Join us and bring your website ideas to life
          </h1>
        </div>

        {/* Border thick line */}
        <div className='border-4 my-3 border-gray-950'></div>
        <div className=' flex items-center justify-between'>
          {/* Polygon */}
          <div className='relative'>
            <img src={polygon} alt='polygon svg' className='-mt-14 rotate-90' />
          </div>
        </div>
      </div>
    </div>
  );
}
