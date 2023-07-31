/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import loadingSvg from "../../assets/spinner.svg";
import { useLazyImage } from "../../hooks/useLazyImage";

const GalleryImage = ({ item }) => {
  const { imageRef, shouldLoadImage } = useLazyImage();

  return (
    <>
      <h2 className="text-sm lg:text-xl font-semibold text-center text-gray-600 mb-4" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">{item.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
        {item?.images.map((img, index) => (
          <img
            key={index}
            ref={imageRef}
            src={shouldLoadImage ? img : loadingSvg}
            className="w-full object-cover object-center border-2 border-white shadow-md rounded" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
        ))}
     </div>
    </>
  );
};


const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://college-booking-server-seven.vercel.app/gallery')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="container mb-24">
      <h1 className="text-xl lg:text-3xl font-semibold text-center uppercase text-purple-600 mb-10" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">Graduates Gallery </h1>

        <div>
        {images?.map((item) => (
          <GalleryImage key={item._id} item={item} />
          ))}
        </div>
    </div>
  );
};

export default Gallery;