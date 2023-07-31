import { Link } from "react-router-dom";

const Paper = () => {
  return (
    <div className="container mb-24 text-center">
      <h1 className="text-xl lg:text-3xl font-semibold text-center uppercase text-purple-600" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Student's Research Papers</h1>
      <small className="mt-2 text-sky-600 font-semibold" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">~ Recommended ~</small>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14" data-aos="slide-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src="https://images.unsplash.com/photo-1585701701580-ad52f6468927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">Gender Equality and Democracy.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Ronald Inglehart , Pippa Norris, and Christian Welzel.</span></p>

          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://brill.com/display/book/9789047404361/B9789047404361_s007.xml'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2500">
          <img src="https://images.unsplash.com/photo-1585701701580-ad52f6468927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">The Support of Autonomy and the Control of Behavior.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Deci, Edward L. Ryan, Richard M.</span></p>

          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://psycnet.apa.org/record/1988-07453-001'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src="https://images.unsplash.com/photo-1585701701580-ad52f6468927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">Fast fashion: response to changes in the fashion industry.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Vertica Bhardwaj and Ann Fairhurst.</span></p>

          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://www.tandfonline.com/doi/abs/10.1080/09593960903498300'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2500">
          <img src="https://images.unsplash.com/photo-1585701701580-ad52f6468927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">Psychology and Culture.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Darrin R. Lehman, Chi-yue Chiu, and Mark Schaller</span></p>

          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://www.annualreviews.org/doi/abs/10.1146/annurev.psych.55.090902.141927'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;