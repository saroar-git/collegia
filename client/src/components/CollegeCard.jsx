import { IoIosAlarm } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import useAuth from "../hooks/useAuth";

const CollegeCard = ({ content }) => {
  const { _id, name, image, admission } = content;
  const { user } = useAuth();

  const handlePrivateRoute = () => {
    if (!user) {
      toast.error('Please Login First');
    }
  };

  return (
    <div className="w-full relative mt-16 bg-base-200 rounded-xl pt-16 text-center p-6">
      <div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={image}
          alt=""
          className="w-full aspect-square object-cover rounded-full object-center"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-neutral mb-5">
        {name}
      </h1>

      <div className="menu menu-horizontal text-right gap-3 text-lg">
        <p className="inline-flex gap-2 items-center" >
          <IoIosAlarm className="text-2xl text-red-600" /> Deadline:
          <span>{admission}</span>
        </p>
      </div>

      <div className="gap-3 text-right">
        <Link to={`/apply/${_id}`} onClick={handlePrivateRoute}>
          <p className=" px-2 py-1 pb-2 border-[1px] shadow-2xl inline bg-purple-600 hover:bg-purple-800 text-white rounded-md" >
            Apply
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;