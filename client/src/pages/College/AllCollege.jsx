import { useEffect, useState } from "react";
import { FcCalendar, FcFinePrint, FcPositiveDynamic, FcRating, FcSportsMode } from "react-icons/fc";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const AllCollege = () => {
  const { user } = useAuth()
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch('https://college-booking-server-seven.vercel.app/colleges')
      .then(res => res.json())
      .then(data => setColleges(data));
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handlePrivateRoute = () => {
    if (!user) {
      toast.error('Please Login First');
    }
  }

  return (

    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="purple" size={50} />
        </div>
      ) : (
        <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
          <Helmet><title>Colleges | Collegia</title></Helmet>

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">All Colleges</h1>

            <div className="md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

                        <p className="font-semibold text-gray-600 flex items-center gap-1.5">
                          <FcRating /> Rating:
                          <span className="text-purple-600">
                            {college.rating}
                          </span>
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
      )}
    </>
  );
};

export default AllCollege;