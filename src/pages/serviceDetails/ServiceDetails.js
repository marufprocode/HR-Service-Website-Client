import axios from "axios";
import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { sharedContext } from "../../context/UserContext";
import useTitleHelmet from "../../hooks/TitleHelmet";
import UserReviews from "../components/shared/UserReviews";

const ServiceDetails = () => {
  const [serviceData, setServiceData] = useState();
  const [reviews, setReviews] = useState([]);
  const [refreshReview, setRefreshReview] = useState(false);
  const { user, loading } = useContext(sharedContext);
  useTitleHelmet("service-details");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://assignment-11-server-lyart-rho.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [id, user]);

  const serviceDetailTop = {
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${serviceData?.img})`,
    backgroundSize: "cover",
  };

  const onSubmit = (data) => {
    if (!(data.ratings >= 1 && data.ratings <= 5)) {
      return;
    }
    const review = {
      message: data.reviewTxt,
      ratings: data.ratings,
      time: new Date().toLocaleString(),
      reviewId: id,
      userId: user?.uid,
      reviewItem: serviceData?.serviceTitle,
      userName: user?.displayName,
      photo: user?.photoURL,
    };

    if (user) {
      axios
        .post(
          "https://assignment-11-server-lyart-rho.vercel.app/user-review",
          review
        )
        .then(function (response) {
          setRefreshReview(!refreshReview);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    reset();
  };

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-lyart-rho.vercel.app/reviewsByTitle/${serviceData?.serviceTitle}`
      )
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.error(err));
  }, [serviceData, refreshReview, loading]);

  return (
    <div className="min-h-screen">
      <div
        className="h-[300px] relative mb-28 xl:mb-10"
        style={serviceDetailTop}
      >
        <div className="absolute bottom-0 left-[50%] transform translate-y-1/2 translate-x-[-50%]"></div>
        <div className="p-7 absolute flex flex-col bg-white border max-w-[400px] bottom-[-50%] transform translate-y-[-15%] left-0 sm:left-5 md:left-10">
          <h1 className="text-2xl font-blackHan">At A Glance</h1>
          <p>{serviceData?.shortDes.slice(0, 100).split("\\n").join("")}...</p>
          <p>
            <span className="font-bold">Ratings:</span> {serviceData?.ratings}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${serviceData?.price}
          </p>
        </div>
      </div>
      <div></div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-5 lg:col-span-4 order-2 md:order-1 px-7 md:px-3 lg:px-10">
          <h1 className="text-2xl mt-5 md:mt-28 py-6">User's Review</h1>
          {/* single User Review  */}
          {reviews?.length ? (
            reviews?.map((review) => (
              <UserReviews key={review._id} review={review} />
            ))
          ) : (
            <p className="text-red-600">No User Review this service yet</p>
          )}
          {user?.uid ? (
            <div>
              <h3 className="text-md font-bold mt-5">
                Let us give a review to improve our services:
              </h3>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="reviewTxt"
                  {...register("reviewTxt", {
                    maxLength: {
                      value: 150,
                      message: "Text should be write within 150 characters",
                    },
                  })}
                  rows="4"
                  // maxLength="150"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your review..."
                ></textarea>
                {errors?.reviewTxt?.message && (
                  <p className="text-red-600">
                    <span className="text-bold">Note:</span>
                    {errors?.reviewTxt?.message}
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <p className="text-sm my-3">
                    <span className="font-bold">Ratings:</span>
                  </p>
                  <select
                    name="ratings"
                    {...register("ratings")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue>Select Ratings</option>
                    <option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3.5">3.5</option>
                    <option value="3">3</option>
                    <option value="2.5">2.5</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <Button className="mt-2 my-10" type="submit">
                  Submit Your Review
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <Link to={`/service-details/add/${id}`} className="text-blue-500">
                Please Login first,
              </Link>{" "}
              to Give a Review
            </div>
          )}
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-8 p-10 md:order-2">
          <h1 className="text-3xl md:text-5xl font-blackHan text-gray-700 mb-5">
            {serviceData?.serviceTitle}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              {serviceData?.shortDes.split("\\n").map((item, index) => (
                <p key={index} className="mb-3">
                  {item} <br />
                </p>
              ))}
            </div>

            <div>
              <img src={serviceData?.img} alt="serviceImg" />
            </div>
          </div>
          <div>
            <p>
              <span className="underline font-bold text-lg">
                Details About This Service:
              </span>{" "}
              <br />
              {serviceData?.description.split("\\n").map((item, index) => (
                <span key={index} className="mb-3">
                  {item} <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
