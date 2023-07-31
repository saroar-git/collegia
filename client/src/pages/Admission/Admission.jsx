import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import CollegeCard from "../../components/collegeCard";
import { useLoaderData } from "react-router-dom";

const Admission = () => {
  const colleges = useLoaderData()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      {loading ?
        (
          <div className="flex items-center justify-center h-screen">
            <ScaleLoader color="purple" size={50} />
          </div>
        ) : (
          <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
            <Helmet><title>Admission | Collegia</title></Helmet>

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-10">Apply for Admission</h1>

            <section className="container my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {colleges?.map((item) => (
                <CollegeCard key={item._id} content={item} />
              ))}
            </section>
          </div>)  
    }
            
      </>)
};

export default Admission;