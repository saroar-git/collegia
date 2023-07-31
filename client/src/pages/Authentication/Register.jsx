import { TbFidgetSpinner } from 'react-icons/tb';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile, logout, loading, setLoading } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const gender = form.gender.value;
    const email = form.email.value;
    const password = form.password.value;

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

        createUser(email, password)
          .then(result => {
            console.log(result.user);

            updateUserProfile(name, imageUrl)
              .then(() => {
                const saveUser = { name: name, photo: imageUrl, email: email, gender: gender };

                fetch('https://college-booking-server-seven.vercel.app/users', {
                  method: 'POST',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify(saveUser)
                })
                  .then(res => res.json())
                  .then(data => {
                    if (data.insertedId) {
                      toast.success('Register Successful, Please Login!');
                      form.reset();
                      logout();
                    }
                  })
                  .then(() => { })
                  .catch(error => toast.error(error.message));
              })
              .catch(error => toast.error(error.message));
          })
          .catch(error => toast.error(error.message));
      })
      .catch(error => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="sm:max-w-xl sm:mx-auto lg:pt-8 w-full mx-auto">
        <div className="border-[1px] border-purple-600 bg-white shadow-lg sm:rounded-3xl px-12 md:px-20 py-6">
          <div className="max-w-md mx-auto" data-aos="fade-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">

            <div className="divide-y divide-gray-200">
              <form className="text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleRegister}>
                <div className="mb-10 flex flex-col items-center">
                  <h1 className="text-2xl font-semibold text-center">Register Now</h1>
                </div>

                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Full Name"
                      required />

                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Full Name*
                    </label>
                </div>

                <select className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600 text-sm text-gray-700" name='gender'>
                  <option disabled selected required>Select Gender*</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>

                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required />

                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address*
                  </label>
                </div>

                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required />

                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Password*
                  </label>
                </div>

                <div className="md:flex md:justify-between items-center text-center  pt-7 pb-5">
                  <div className="relative pb-7">
                    <label className="text-sm absolute -top-5 left-0">Image*</label>
                    <input type="file" name="image" className="file-input border-[#04431d] file-input-xs max-w-xs" required />
                  </div>

                  <button type="submit" className="px-3 py-1 text-white cursor-pointer hover:bg-sky-500 bg-purple-600 hover:scale-95 duration-300 hover:duration-300  rounded w-24">
                    {loading ? (
                      <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;