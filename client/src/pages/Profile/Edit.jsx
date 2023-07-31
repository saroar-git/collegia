import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Edit = () => {
  const user = useLoaderData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const college = form.college.value;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;

    const saveUser = { name: name, college: college, email: email, address: address };
    fetch(`https://college-booking-server-seven.vercel.app/users/id/${user._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 1) {
          toast.success('User Data Updated!');
          form.reset();
          navigate('/profile');
        } else {
          toast.error('Failed to update user data.');
        }
        setLoading(false);
      })
      .catch(error => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading ?
        (
          <div className="flex items-center justify-center h-screen">
            <ScaleLoader color="purple" size={50} />
          </div>
        ) : (
          <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
            <Helmet><title>Apply | Collegia</title></Helmet>

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">Edit Information of {user.name}</h1>

            <div className="divide-y divide-gray-200 w-11/12 mx-auto md:w-3/4 lg:w-1/2 border-4 border-purple-400 rounded px-4 py-8 md:mt-14 shadow-2xl">
              <form className="text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    defaultValue={user?.name}
                    required />

                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Edit Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:borer-rose-600 mb-5 md:mb-0"
                    defaultValue={user?.email}
                    required />

                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Edit Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    name="college"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Address"
                    required />

                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm inline">
                    Edit College
                  </label>
                </div>

                <div className="relative">
                  <input
                    name="address"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Address"
                    required />

                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm inline">
                    Edit Address
                  </label>
                </div>

                <div className="text-center">
                  <button type="submit" className="px-3 py-1 text-white cursor-pointer hover:bg-sky-500 bg-purple-600 hover:scale-95 duration-300 hover:duration-300 rounded">
                    {loading ? (
                      'Processing..'
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </>);
};

export default Edit;