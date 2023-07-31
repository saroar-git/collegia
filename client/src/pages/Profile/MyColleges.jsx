import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { GrChat, GrLocation, GrMail, GrPhone } from "react-icons/gr";
import { Link } from "react-router-dom";

const MyColleges = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const { data: applied = [] } = useQuery({
    queryKey: ['apply', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://college-booking-server-seven.vercel.app/apply/${user?.email}`);
      return res.json();
    }
  });

  return (
    <>
      {loading ?
        (
          <div className="flex items-center justify-center h-screen">
            <ScaleLoader color="purple" size={50} />
          </div>
        ) : (
          <div className='mt-8 h-screen mb-[2180px] md:mb-[700px] lg:mb-8 w-full mx-auto'>
            <Helmet><title>Applied | Collegia</title></Helmet>

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">Applied for Colleges</h1>
            {applied.length === 0 ?
              <div className="h-96 flex items-center justify-center">
                You have not Applied Yet!
              </div> :
              <section className="h-96 my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {applied?.map((item) => (
                  <div key={item._id}>
                    <div className="p-4 bg-base-200 w-full text-left rounded-md relative">
                      <Link to={`/add-review/${item.id}`} className="absolute right-0 md:-top-2 md:-right-5 flex items-center gap-1 text-sm px-2 py-1 pb-2 border-[1px] shadow-2xl bg-sky-300 rounded-md"><GrChat /> Review</Link>
                      <div className="md:flex-row gap-6 flex flex-col items-center justify-center">
                        <img src={item.photo} className="max-w-sm rounded-lg shadow-2xl md:w-52 w-11/12" />
                        <div className="space-y-2">
                          <h1 className="text-2xl font-bold">{item.college}</h1>
                          <p className="text-md font-semibold text-purple-600">School of {item.subject}</p>

                          <div className="md:flex items-end md:gap-40 lg:gap-28 space-y-4 md:space-y-0">
                            <div className="mb-5">
                              <p className="text-sm font-semibold flex items-center gap-2"><GrMail /> {item.email}</p>
                              <p className="text-sm font-semibold flex items-center gap-2"><GrPhone /> {item.phone}</p>
                              <p className="text-sm font-semibold flex items-center gap-2"><GrLocation /> {item.address}</p>
                            </div>

                            <Link to={`/details/${item.id}`} className="px-2 py-1 pb-2 border-[1px] shadow-2xl inline bg-purple-600 hover:bg-purple-800 text-white rounded-md">See College</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            }

          </div>)
      }

    </>);
};

export default MyColleges;