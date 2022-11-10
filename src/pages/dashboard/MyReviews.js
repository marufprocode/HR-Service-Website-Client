import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { sharedContext } from "../../context/UserContext";
import TableRow from "../components/shared/TableRow";
import "./Dashboard.css";
import useTitleHelmet from "../../hooks/TitleHelmet";

const MyReviews = () => {
  useTitleHelmet('reviews');
  const { user, refresh, setRefresh } = useContext(sharedContext);
  const [myReviews, setMyReviews] = useState([]);
  // const [udateReview, setUpdateReview] = useState(false);


  useEffect(() => {
    axios
      .get(`http://localhost:5000/user-review/${user?.uid}?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('access-token')}`
        }
      })
      .then((res) => setMyReviews(res))
      .catch((error) => console.error(error));
  }, [refresh, user]);

  const handleDeleteReview = (id) => {
    axios
      .delete(`http://localhost:5000/user-review/${id}?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('access-token')}`
        }
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          // setUpdateReview(!udateReview);
          setRefresh(!refresh);
        }
      })
      .catch((error) => console.error(error));
  };


  return (
    <div className="h-[100%]">
      {myReviews?.data?.length ? (
        <div className="w-full pr-5 my-6 mx-auto">
        <div className="flex flex-col">
          <div className="shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 reviewTable">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4"></th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs tracking-wider text-left text-gray-700 uppercase font-bold dark:text-gray-400"
                      >
                        Service Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Short Description
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Ratings
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {myReviews?.data?.length &&
                      myReviews?.data?.map((review, index) => (
                        <TableRow
                          key={index}
                          review={review}
                          handleDeleteReview={handleDeleteReview}
                        ></TableRow>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> 
      ) : (
        <div className="text-3xl font-blackHan text-orange-500 w-full h-full flex justify-center items-center">
          <h1>No Reviews were Added Yet</h1>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
