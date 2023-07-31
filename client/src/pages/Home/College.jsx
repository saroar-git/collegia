import { useEffect, useState } from "react";
import { FcCalendar, FcFinePrint, FcPositiveDynamic, FcSportsMode } from "react-icons/fc";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-hot-toast'

const College = () => {
  const { user } = useAuth()
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = () => {
    fetch('https://college-booking-server-seven.vercel.app/colleges')
      .then((res) => res.json())
      .then((data) => setColleges(data.slice(0, 3)));
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      fetchColleges();
    } else {
      fetch(`https://college-booking-server-seven.vercel.app/colleges/search?query=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => setColleges(data));
    }
  }, [searchQuery]);

  const handlePrivateRoute = () => {
    if (!user) {
      toast.error('Please Login First');
    }
  }

  return (
    <div className='mb-24 w-full mx-auto'>
      <h1 className="text-xl lg:text-3xl font-semibold text-center uppercase text-purple-600 mb-4" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Best Colleges</h1>
      <div className="text-center">
        <input type="text" placeholder="Search for College.." className="input input-bordered input-sm input-primary lg:w-full max-w-xs mb-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          colleges.map(college => {
            return (
              <div key={college._id} className="card card-compact md:w-96 bg-base-100 shadow-xl">
                <figure><img src={college.image} alt="image" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{college.name}</h2>

                  <p className="font-semibold text-gray-600 flex items-center gap-1.5"> <FcCalendar /> Admission Starts on: <span className="animate-pulse text-red-500">{college.admission}</span></p>

                  <p className="text-md font-semibold text-gray-600 flex items-center gap-1.5"><FcFinePrint /> Published Research: <span className="text-purple-600">{college.research.ongoingProjects}</span></p>

                  <p className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <FcPositiveDynamic /> Events: {college.events.upcoming.map((event, index) => (
                      <span key={index} className="text-purple-600 text-xs">
                        {index > 0} #{event.name}
                      </span>
                    ))}
                  </p>

                  <p className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <FcSportsMode /> Sports: {college.sports.map((sport, index) => (
                      <span key={index} className="text-purple-600 text-xs">
                        {index > 0} #{sport}
                      </span>
                    ))}
                  </p>

                  <div className="card-actions justify-end text-purple-600 hover:text-purple-800 duration-300 hover:duration-300" title="View Details">
                    <Link to={`/details/${college._id}`} onClick={handlePrivateRoute}>
                      <BsFillArrowRightCircleFill size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default College;