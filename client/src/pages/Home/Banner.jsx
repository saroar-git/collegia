import { Link } from 'react-router-dom';
import logo from '/collegia.jpg'
import banner1 from '../../assets/images/colleges.png';
import banner from '../../assets/images/college.png';

const Banner = () => {
  return (
    <div className='mt-8 mb-24 w-full mx-auto'>
      <div className='relative hidden md:block'>
        <img src={banner1} alt="" className='w-full mx-auto rounded' />
        <div className='absolute bg-black w-full h-full top-0 rounded opacity-50'></div>
        <div className='absolute top-4 md:left-10 md:top-20 lg:left-10 lg:top-32 text-white text-lg md:text-3xl lg:text-5xl font-bold left-4 lg:space-y-5 space-y-2 md:space-y-3'>
          <div className='flex items-center gap-2 lg:gap-4'>
            <img src={logo} alt="" className='w-8 lg:w-16' />
            <h2>Collegia</h2>
         </div>
          <p className='text-sm md:text:lg lg:text-xl pl-4 lg:pl-20 text-gray-300'>We offer best colleges for you</p>
          <Link to='/college' className="lg:px-5 ml-4 lg:ml-20 lg:py-2.5 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600 text-sm lg:text-base">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">All Colleges</span>
          </Link>
        </div>
      </div>
      
      <div className='relative md:hidden'>
        <img src={banner} alt="" className='w-full mx-auto rounded' />
        <div className='absolute bg-black w-full h-full top-0 rounded opacity-50'></div>
        <div className='absolute top-14 text-white text-lg font-bold left-4 space-y-2 -3'>
          <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='w-8' />
            <h2>Collegia</h2>
         </div>
          <p className='text-sm pl-4 text-gray-300'>We offer best colleges for you</p>
          <Link to='/college' className="lg:px-5 ml-4 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600 text-sm lg:text-base">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Colleges</span>
          </Link>
        </div>

     </div>
    </div>
  );
};

export default Banner;