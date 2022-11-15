import React from "react";
// import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import ReviewEditModal from "./ReviewEditModal";

const TableRow = ({ review, handleDeleteReview, setUpdateReview }) => {
  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="p-4 w-4"></td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {review?.reviewItem}
        </td>
        <td className="py-4 px-6 max-w-[250px] text-sm font-medium text-gray-900 dark:text-white">
          {
            review?.message.length > 50 ?
            `${review?.message.slice(0,50)}...`
            :
            review?.message
          }
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {review?.ratings}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {
          review?.time &&
          review.time.split(",").map((i, idx) => <p key={idx}>{i} <br /></p>)
          }
        </td>
        {
          <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
            {/* <Link to={`/dashboard/edit-review/${review?._id}`}><button className="mr-3 text-blue-600">Edit</button></Link> */}
            {/* <button className="text-red-600" onClick={()=>handleDeleteReview(review?._id)}>Delete</button> */}
            <ReviewEditModal review={review} setUpdateReview={setUpdateReview}/>
            <DeleteModal review={review} handleDeleteReview={handleDeleteReview}/>
          </td>
        }
      </tr>
    </>
  );
};

export default TableRow;
