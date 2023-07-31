import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Container from "../../components/Container";
import Banner from "./Banner";
import College from "./College";
import Gallery from "./Gallery";
import Paper from "./Papers";
import Testimonial from "./Testimonial";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BeatLoader color="purple" size={20} />
        </div>
      ) : (
        <div>
            <Helmet><title>Home | Collegia</title></Helmet>
            <Banner />
            <Container>
              <College />
              <Gallery />
              <Paper />
              <Testimonial />
            </Container>
          </div>
      )}
    </div>
  );
};

export default Home;