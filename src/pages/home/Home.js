import { Button, Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/shared/ServiceCard";
import "./Home.css";
import parallaxImg from "../../assets/images/3175367.jpg";
import carouselImg1 from "../../assets/images/CarouselImg1.jpg";
import carouselImg2 from "../../assets/images/CarouselImg2.webp";
import carouselImg3 from "../../assets/images/CarouselImg3.png";
import carouselImg4 from "../../assets/images/CarouselImg4.jpg";
import { Link } from "react-router-dom";
import useTitleHelmet from "../../hooks/TitleHelmet";

const Home = () => {
  const [serviceData, setServiceData] = useState();
  const parallaxStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${parallaxImg})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };
  useTitleHelmet('Home')
  useEffect(() => {
    fetch("http://localhost:5000/services?limit=3")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-fit">
        <div className="bg-violet-700 hero-left h-[90%] max-h-[600px] lg:h-[550px] min-h-[400px]">
          <div className="flex top-10 flex-col h-full justify-center px-10">
            <p className="hero-text-sm font-ubuntu font-bold text-gray-800">
              {" "}
              I will be you HR Assistance
            </p>
            <h1 className="font-blackHan text-white text-4xl">
              <span className="text-purple-900">Strategic Human Resource</span>{" "}
              <br />
              <span>Services</span>
            </h1>
            <p className="text-slate-200">
              I'm a HR professional, giving service with HR Vision Bangladesh is a HR Recruiting and Management Service Provider, which also provides services such as Payroll, Virtual Office, Com-pany Registration, Bank Account Open- ning for 100% foreign owned
              companies and Fund Management Services.
            </p>
          </div>
        </div>
        <div className="h-[90%] max-h-[600px] lg:h-[550px] min-h-[400px] mt-[0px] md:mt-0 w-full md:relative">
          <div className="md:w-[900px] h-full min-h-[300px] md:mt-0 md:absolute md:right-0 md:z-[-1]">
            <Carousel
              indicators={false}
              leftControl=" "
              rightControl=" "
              slideInterval={5000}
            >
              <img src={carouselImg1} className="h-full" alt="..." />
              <img src={carouselImg2} className="h-full" alt="..." />
              <img src={carouselImg3} className="h-full" alt="..." />
              <img src={carouselImg4} className="h-full" alt="..." />
            </Carousel>
          </div>
        </div>
      </div>
      {/* Service section starts  */}
      <div className="my-10">
        <div>
          <h1 className="text-center text-2xl font-bold px-5">
            A POWERHOUSE OF CUTTING-EDGE
          </h1>
          <h1 className="text-center text-2xl font-bold px-5">
            EDUCATION, RESEARCH & TEACHING IN THE WORLD
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10 gap-5 px-5">
          {/* {<ServiceCard />
          <ServiceCard />
          <ServiceCard />} */}
          {serviceData?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </div>
      {/* third section starts  */}
      <div className="relative">
        <div className="absolute top-0 h-[250px] w-full bg-violet-700"></div>
        <div className="absolute top-[150px] h-[500px] w-full bg-white review-section">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex flex-col h-full justify-center px-10 mt-[80px]">
                <p>------- More than just business</p>
                <h1 className="font-blackHan text-gray-800 text-4xl">
                  <span className="text-purple-900">Big Clients</span> <br />
                  <span>Great Reviews</span>
                </h1>
                <p className="text-slate-900">
                  Phosfluorescently engage worldwide methodologies with
                  web-enabled technology. Interactively coordinate proactive
                  e-commerce via process-centric outside the box thinking.
                </p>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1295309857/photo/group-of-business-people-meeting-discussing-analyzing-graphs-financial-data-and-planning-a.jpg?s=612x612&w=0&k=20&c=uSZEmg02C2MdPgSE7l6qYh4h60pMuJMe2EXtWdjNXDY="
              alt="meetingImg"
              className="meeting-photo h-[400px] mt-[100px]"
            />
          </div>
        </div>
      </div>
      {/* parallax get updates section  */}
      <div className="my-10 mt-[1000px] md:mt-[750px]">
        <div
          className="parallax-style h-[400px] grid grid-cols-1 md:grid-cols-2 items-center"
          style={parallaxStyle}
        >
          <div className="px-7">
            <h1 className="text-white font-blackHan text-3xl">
              GET FREE TRAINING ON BUSINESS DEVELOPMENT BY JOHN SMITH{" "}
            </h1>
            <p className="text-gray-200">It's limited seating! Hurry Up</p>
            <div className="flex gap-3 py-5">
              <div className="px-5 py-3 border-white border-2 text-white flex flex-col items-center">
                <h1 className="text-3xl font-bold">0</h1>
                <p className="">Days</p>
              </div>
              <div className="px-5 py-3 border-white border-2 text-white flex flex-col items-center">
                <h1 className="text-3xl font-bold">0</h1>
                <p className="">Hours</p>
              </div>
              <div className="px-5 py-3 border-white border-2 text-white flex flex-col items-center">
                <h1 className="text-3xl font-bold">0</h1>
                <p className="">Minutes</p>
              </div>
              <div className="px-5 py-3 border-white border-2 text-white flex flex-col items-center">
                <h1 className="text-3xl font-bold">0</h1>
                <p className="">Seconds</p>
              </div>
            </div>
          </div>
          <div className="w-full md:flex justify-center hidden">
            <div className="max-w-[500px] bg-slate-100 text-gray-700 p-10">
              <h1 className="text-3xl text-center">Get Stay Touch with Us</h1>
              <h1 className="text-center">Get Updates on services</h1>
              <form
                action=""
                className="flex flex-col gap-5 mt-7 transition-all"
              >
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  className="border-none py-3 shadow-md"
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your Email"
                  className="border-none py-3 shadow-md"
                />
                <button
                  type="submit"
                  className="bg-gray-400 py-3 font-bold text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* You Can Add Section Here  */}
    </div>
  );
};

export default Home;
