import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import { BiSolidDownArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import { TbFidgetSpinner } from "react-icons/tb";
import Register from "./Register";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const { login, resetPassword, loading, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        toast.success('Login Successful');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  const emailRef = useRef();
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error('Insert You Email');
    }

    resetPassword(email)
      .then(() => {
        toast.success('Check Your Email');
        setIsLoading(false);
      })
      .catch(error => {
        toast.error(error.message);
        setLoading(false);
      });
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="purple" size={50} />
        </div>
      ) : (
        <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
          <h1 className="text-xl lg:text-3xl font-semibold text-center uppercase text-purple-600">Join Collegia</h1>

          <div className="flex flex-col gap-10 lg:flex-row items-start justify-between space-y-10 w-full mx-auto">
            <Helmet><title>Colleges | Collegia</title></Helmet>

            {/* Login form */}
            <div className="relative py-6 sm:max-w-xl sm:mx-auto mt-16">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-600  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"> </div>
              <div className="relative border-[1px] border-purple-600 bg-white shadow-lg sm:rounded-3xl px-16 md:px-24 py-8">
                <div className="max-w-md w-full mx-auto" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-center">Login to Collegia</h1>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <form className="pt-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                      <div className="relative">
                          <input
                            ref={emailRef}
                          name="email"
                          type="email"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Email address"
                          required />

                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                          Email Address
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
                          Password
                        </label>
                        </div>                        

                        <div>
                          <div className="relative group pb-2">
                            <button
                              type="submit"
                              className="relative px-3 py-1 font-medium text-white w-full">
                              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-purple-600 group-hover:skew-x-12"></span>
                              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-600 group-hover:bg-sky-500 group-hover:-skew-x-12"></span>
                              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
                              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
                              <span className="relative">
                                {loading ? (
                                  <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                                ) : (
                                  'Continue'
                                )}
                              </span>
                            </button>
                          </div>
                          <p className="text-right text-xs font-semibold cursor-pointer hover:text-purple-600" onClick={handleResetPassword}>Forget password?</p>
                      </div>

                      <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div className="divider text-base mt-8 mb-3">Continue With</div>
                          <SocialLogin />
                      </div>

                      <p className="flex items-center gap-1 justify-center">
                        Not a member?
                        <span className="text-red-600 text-base animate-pulse hover:text-purple-600 font-semibold cursor-pointer flex items-center gap-1"> Apply now
                          <BiSolidRightArrowCircle className="hidden md:block" />
                          <BiSolidDownArrowCircle className="md:hidden" />
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider lg:divider-horizontal py-10 text-purple-600 text-3xl">●</div>
            <Register />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;