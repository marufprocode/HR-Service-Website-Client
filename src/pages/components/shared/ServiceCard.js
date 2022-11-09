import { Card } from "flowbite-react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({service}) => {
  const {serviceTitle, price, ratings, shortDes, img} = service;
  return (
    <>
      <div className="max-w-sm w-full">
        <Card
          className="border-purple-600 hover:border-none hover:scale-[1.01] bg-slate-100 hover:bg-white hover:shadow-xl relative pt-[210px] transition-all min-h-[508px]"
        >
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="Cardimage" className="absolute left-0 top-0 rounded-t-lg h-[220px] w-full cursor-zoom-in"/>
                </PhotoView>
            </PhotoProvider>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceTitle? serviceTitle:""}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {shortDes?.slice(0, 100).split('\\n').join("")}...
          </p>
          <div className="">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((n) => (
              <AiFillStar key={n} className="text-amber-500" />
            ))}
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              {ratings}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link to={`/service-details/${service?._id}`}
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              service={service}
            >
              View Details
            </Link>
          </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ServiceCard;
