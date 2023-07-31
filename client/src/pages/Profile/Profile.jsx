import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdAssuredWorkload, MdEmail, MdLocationOn } from "react-icons/md";

const Profile = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const { data: item = {} } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://college-booking-server-seven.vercel.app/users/${user?.email}`);
      return res.json();
    }
  });

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="purple" size={50} />
        </div>
      ) : (
        <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
          <Helmet><title>Profile | Collegia</title></Helmet>

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-32">My Profile</h1>

            <section className="md:w-1/2 mx-auto">
              <div key={item._id} className="w-full relative mt-16 bg-base-200 rounded-xl pt-16 text-center p-6">
                <div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={item?.photo}
                    alt=""
                    className="w-full aspect-square object-cover rounded-full object-center"
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-neutral mb-5">
                  {item?.name}
                </h1>

                <div className="menu menu-horizontal flex-col text-left gap-2 md:text-lg">
                  <p className="text-purple-600 font-semibold flex items-center gap-1">
                    <MdEmail />  Email:
                    <span className="text-gray-700"> {item?.email}</span>
                  </p>
                  <p className="text-purple-600 font-semibold flex items-center gap-1">
                    <MdAssuredWorkload />  University:
                    <span className="text-gray-700"> {item?.college ? item.college : '~ Data not found ~'}</span>
                  </p>
                  <p className="text-purple-600 font-semibold flex items-center gap-1">
                    <MdLocationOn />  Address:
                    <span className="text-gray-700"> {item?.address ? item.address : '~ Data not found ~'}</span>
                  </p>
                </div>

                <div className="flex items-end justify-end w-full">
                  <Link to={`/edit/${item?._id}`} className="px-2 py-1 pb-2 border-[1px] shadow-2xl bg-purple-600 hover:bg-purple-800 text-white rounded-md flex items-center gap-1">
                    <FaEdit /> Edit
                  </Link>
                </div>
              </div>
            </section>
        </div>
      )}
    </>
  );
};

export default Profile;