import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
      const { googleLogin, githubLogin, setLoading } = useAuth();
      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || "/";

      const handleGoogleLogin = () => {
            googleLogin()
                  .then(result => {
                        const loggedInUser = result.user;
                        console.log(loggedInUser);
                        const saveUser = { name: loggedInUser.displayName, photo: loggedInUser.photoURL, email: loggedInUser.email };
                        fetch('https://college-booking-server-seven.vercel.app/users', {
                              method: 'POST',
                              headers: {
                                    'content-type': 'application/json'
                              },
                              body: JSON.stringify(saveUser)
                        })
                              .then(res => res.json())
                              .then(() => {
                                    toast.success('Login Successful');
                                    navigate(from, { replace: true });
                              });
                  })
                  .catch(error => {
                        toast.error(error.message);
                        setLoading(false);
                  });

      };

      const handleGithubLogin = () => {
            githubLogin()
                  .then(result => {
                        const loggedInUser = result.user;
                        console.log(loggedInUser);
                        const saveUser = { name: loggedInUser.displayName, photo: loggedInUser.photoURL, email: loggedInUser.email };
                        fetch('https://college-booking-server-seven.vercel.app/users', {
                              method: 'POST',
                              headers: {
                                    'content-type': 'application/json'
                              },
                              body: JSON.stringify(saveUser)
                        })
                              .then(res => res.json())
                              .then(() => {
                                    toast.success('Login Successful');
                                    navigate(from, { replace: true });
                              });
                  })
                  .catch(error => {
                        toast.error(error.message);
                        setLoading(false);
                  });
      };

      return (
            <div className="flex items-center gap-4">
                  <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center" onClick={handleGoogleLogin}>
                              <FcGoogle />
                              <span className="ml-4 text-base">
                                    Google</span>
                        </div>
                  </button>

                  <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center" onClick={handleGithubLogin}>
                              <FaGithub />
                              <span className="ml-4 text-base">
                                    Github</span>
                        </div>
                  </button>
            </div>
      );
};

export default SocialLogin;