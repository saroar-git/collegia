import { Link } from 'react-router-dom';
import img from '../../assets/images/404.gif'
import { Helmet } from 'react-helmet-async';

const Error = () => {
      return (
            <div className='text-center bg-[#FFFFFF]'>
                  <Helmet><title>404 | Page Not Found</title></Helmet>
                  <img className='mx-auto' src={img} alt="" />
                  <Link to='/' className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white">Back to Home</span>
                  </Link>
            </div>
      );
};

export default Error;