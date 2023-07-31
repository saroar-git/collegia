import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FcCalendar, FcFinePrint, FcPositiveDynamic, FcSportsMode } from "react-icons/fc";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const CollegeDetail = () => {
  const college = useLoaderData();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  console.log(college);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="purple" size={50} />
        </div>
      ) : (
        <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
          <Helmet><title>College Detail | Collegia</title></Helmet>

          <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">Detail of the <span className="text-purple-800">{college.name}</span></h1>

          <div className='md:mt-20 lg:flex items-start justify-between'>
            <div className='relative' data-aos="slide-right" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <div className='flex flex-col items-center mt-2 space-y-2'>
                <img src={college.image} alt="" className='lg:h-80 w-full shadow-sm rounded' />
                <h1 className='text-xl md:text-2xl font-bold pt-4'>{college.name}</h1>
                <p className="font-semibold text-gray-600 flex items-center gap-1.5"> <FcCalendar /> Admission Starts on: <span className="animate-pulse text-red-500">{college.admission}</span></p>
              </div>
            </div>

            <div className="divider lg:divider-horizontal text-[#136734] text-3xl lg:px-10 py-10 lg:py-0">●</div>

            <div className='w-full mx-auto text-justify space-y-2 px-3 md:px-0' data-aos="fade-up" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <p className="text-lg font-semibold text-gray-600 flex items-center gap-1.5"><FcFinePrint className="md:text-2xl" />Our Research Work: </p>

                  <div className="pl-4 md:pl-10 font-semibold text-gray-700 text-md">
                    <p>Total Research:  <span className="text-purple-700">{college.research.ongoingProjects}</span></p>
                    <h2 className="mt-4">Research Areas:
                      <span className="text-purple-700">{college.research.areas.map((event, index) => (
                        <p key={index} className="pl-3 md:pl-5">
                          <span className="text-purple-700 block">
                            {index > 0} ● {event}
                          </span>
                        </p>
                      ))}
                      </span>
                    </h2>

                    <h2 className="mt-4">Facilities:
                      <span className="text-purple-700">{college.research.facilities.map((event, index) => (
                        <p key={index} className="pl-3 md:pl-5">
                          <span className="text-purple-700 block">
                            {index > 0} ● {event}
                          </span>
                        </p>
                      ))}
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="mt-8 md:mt-0">
                  <p className="text-lg font-semibold text-gray-600 flex items-center gap-1.5">
                    <FcPositiveDynamic className="md:text-2xl" />Our Events:</p>

                  <div className="pl-4 md:pl-10 font-semibold text-gray-700 text-md mt-2">
                    <p>Upcoming Events:  <span className="text-purple-700">{college.events.upcoming.length}</span></p>
                      <span className="text-purple-700">{college.events.upcoming.map((event, index) => (
                        <h3 key={index} className="pl-3 md:pl-5">
                          <p className="text-purple-700">
                            {index > 0}
                            <span>● {event.name}</span>
                          </p>
                        </h3>
                      ))}
                      </span>

                    <h2 className="mt-4">Recent Events:
                      <span className="text-purple-700">{college.events.past.map((event, index) => (
                        <h3 key={index} className="pl-3 lg:pl-5">
                          <p className="text-purple-700">
                            {index > 0}
                            <span>● {event.name}</span>
                          </p>
                        </h3>
                      ))}
                      </span>
                    </h2>
                  </div>

                    <h2 className="text-lg font-semibold text-gray-600 flex items-center gap-1.5 mt-8"><FcSportsMode className="md:text-2xl" /> Sports: </h2>
                    <p className="font-semibold text-gray-600 flex items-center gap-1.5 ml-8">
                      {college.sports.map((sport, index) => (
                        <span key={index} className="text-purple-700">
                          {index > 0} #{sport}
                        </span>
                      ))}
                    </p>
                </div>
              </div>

              <div className="pt-10">
                  <h2 className="text-lg font-semibold text-gray-600 shadow-sm pr-2 py-1 inline rounded">Admission Process:</h2>
                  <span className="text-base">
                     {college.admissionProcess}
                  </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CollegeDetail;