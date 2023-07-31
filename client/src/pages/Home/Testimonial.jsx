import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {  FcRating } from "react-icons/fc";

export const useCollege = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('https://college-booking-server-seven.vercel.app/colleges')
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return colleges;
};

const Testimonial = () => {
  const colleges = useCollege();

  return (
    <div className="container mb-16">
      <h1 className="text-xl lg:text-3xl font-semibold text-center uppercase text-purple-600 mb-10" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">Student's Feedback</h1>
      <div className="text-center">
        <Tabs>
          <TabList className="text-purple-700 font-semibold mb-8 bg-base-200">
            {colleges.map(college => (
              <Tab key={college._id}>{college.name}</Tab>
            ))}
          </TabList>

          {colleges.map(college => (
            <TabPanel key={college._id}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
              >
                {college.reviews && college.reviews.length > 0 ? (
                  college.reviews.map((review, index) => (
                    <SwiperSlide key={index} className="bg-base-200 py-28 rounded">
                      <div className="w-full mx-auto flex items-center justify-center">
                        <img src={college.image} alt="" className="w-20 h-20 rounded-full object-cover mb-6" />
                      </div>
                      <div className="text-lg font-bold text-purple-700 w-[65%] mx-auto">{review}</div>
                      <p className="flex items-center justify-center gap-1 mt-2"><FcRating/>{ college.rating}</p>
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>No reviews available for {college.name}.</SwiperSlide>
                )}
              </Swiper>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Testimonial;
