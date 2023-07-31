import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Apply = () => {
  const colleges = useLoaderData();
  const { user } = useAuth();
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
    const subject = form.subject.value;
    const phone = form.phone.value;
    const dob = form.dob.value;
    const gender = form.gender.value;
    const address = form.address.value;
    const image = form.image.files[0];

    // image handle
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_hosting}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const imageUrl = imageData.data.display_url;

        const saveUser = { name: name, college: college, image: imageUrl, email: email, gender: gender, subject: subject, phone: parseFloat(phone), dob: dob, address: address, photo: colleges.image, id: colleges._id };
        fetch('https://college-booking-server-seven.vercel.app/apply', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              toast.success('Application Submitted!');
              form.reset();
              navigate('/my-college');
            }
            setLoading(false);
          });
      })
      .catch(error => {
        setLoading(false);
        toast.error(error.message);
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

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">Apply to {colleges.name}</h1>

            <div className="divide-y divide-gray-200 w-11/12 mx-auto md:w-3/4 lg:w-1/2 border-4 border-purple-400 rounded px-4 py-8 md:mt-14 shadow-2xl">
              <form className="text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                <div className="md:flex items-center justify-between gap-5 text-sm">
                  College:
                  <input
                    name="college"
                    type="text"
                    className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:borer-rose-600 mb-5 md:mb-0"
                    defaultValue={colleges.name}
                    readOnly />

                  Name:
                  <input
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    defaultValue={user?.displayName}
                    readOnly />
                </div>

                <div className="md:flex items-center justify-between gap-5 text-sm">
                  Email:
                  <input
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-5 md:mb-0"
                    defaultValue={user.email}
                    required />

                  Subject:
                  <select className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600 text-sm text-gray-700" name='subject'>
                    <option disabled selected required>Select one</option>
                    <option>Computer Science</option>
                    <option>Fashion</option>
                    <option>Music</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Mathematics</option>
                    <option>Literature</option>
                    <option>Physical Education</option>
                    <option>Education</option>
                    <option>Language</option>
                  </select>
                </div>

                <div className="md:flex items-center justify-between gap-5 text-sm">
                  Phone:
                  <input
                    name="phone"
                    type="number"
                    className="peer text-sm h-10  w-full border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:borer-rose-600 mb-5 md:mb-0"
                    placeholder="Your Phone Number (+880)"
                    required />

                  DOB:
                  <input
                    name="dob"
                    type="date"
                    className="text-sm  h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Date of Birth"
                    required />
                </div>

                <div className="md:flex items-center justify-between gap-5 text-sm">
                  Gender:
                  <select className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600 text-sm text-gray-700 mb-5 md:mb-0" name='gender'>
                    <option disabled selected required>Select one</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>

                  Image:
                  <div className="pt-4">
                    <input type="file" name="image" className="file-input border-[#04431d] file-input-xs max-w-xs" required />
                  </div>
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
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Address*
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

export default Apply;