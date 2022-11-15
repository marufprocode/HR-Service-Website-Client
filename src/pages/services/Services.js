import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import serviceTopImg from "../../assets/images/servicetop.jpg";
import useTitleHelmet from "../../hooks/TitleHelmet";
import ServiceCard from "../components/shared/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [control, setControl] = useState(false);
  useTitleHelmet("services");

  const serviceTop = {
    background: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${serviceTopImg})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };
  useEffect(() => {
    fetch("https://assignment-11-server-lyart-rho.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (data) {
          setControl(true);
        }
      });
  }, []);

  return (
    <div>
      <div className="h-[150px] relative" style={serviceTop}>
        <div className="absolute bottom-0 left-[50%] transform translate-y-1/2 translate-x-[-50%]">
          <p className="bg-sky-700 py-3 px-5 inline font-bold text-white">
            My All Services
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10 gap-5 px-5">
        {!control ? (
          <div className="min-h-screen col-span-3">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </div>
        ) : (
          services?.map((service) => (
            <ServiceCard key={service?._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
