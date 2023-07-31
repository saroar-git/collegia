import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://college-booking-server-seven.vercel.app/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
        setLoading(false);
      });
  }, [id]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    const form = e.target;
    const review = form.name.value.trim();
    const rating = parseFloat(form.rating.value);

    if (review.length === 0) {
      toast.error("Please enter a review.");
      return;
    }
    if (review.length > 150) {
      toast.error("Review cannot exceed 150 characters.");
      return;
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
      toast.error("Please Rate Between 1 and 5.");
      return;
    }

    // const existingRating = college?.rating || 0;
    // const newTotalRating = existingRating + rating;
    // const totalRatingCount = college?.totalRatingCount || 1;
    // const newAverageRating = newTotalRating / totalRatingCount;

    const reviewsArray = college?.reviews || [];
    const updatedReviewsArray = [...reviewsArray, review];

    const collegeDataToUpdate = {
      reviews: updatedReviewsArray,
      rating: rating,
    };

    fetch(`https://college-booking-server-seven.vercel.app/colleges/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collegeDataToUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review and rating updated successfully!");
        form.reset();
        setSubmit(false);
        navigate('/my-college')
      })
      .catch((error) => {
        toast.error(error.message);
        setSubmit(false);
      });
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="purple" size={50} />
        </div>
      ) : (
        <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
          <Helmet><title>Add Review | Collegia</title></Helmet>

          <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">Add Review to {college?.name}</h1>

          <div className="divide-y divide-gray-200 w-11/12 mx-auto md:w-3/4 lg:w-1/2 border-4 border-purple-400 rounded px-4 py-8 md:mt-14 shadow-2xl">
            <form className="text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

              <div className="relative">
                <input
                  name="name"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Address"
                  required />

                <label
                  htmlFor="address"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                  Type Review*
                </label>
              </div>
              <div className="relative">
                <input
                  name="rating"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Address"
                  required />

                <label
                  htmlFor="address"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                  Insert Rating (1-5)*
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="px-3 py-1 text-white cursor-pointer hover:bg-sky-500 bg-purple-600 hover:scale-95 duration-300 hover:duration-300 rounded">
                    {submit ?
                      'Processing..'
                      :
                    'Submit'
                    }
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReview;