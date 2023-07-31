import Container from "../components/Container";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BeatLoader color="purple" size={20} />
        </div>
      ) : (
        <div className="min-h-screen overflow-hidden font-nunito relative">
          <ScrollRestoration />
          <Navbar />
          <div className="min-h-[calc(100vh-250px)]">
            <Container>
              <Outlet />
            </Container>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;