import React from 'react';

const UserReviews = ({review}) => {
    return (
        <div className="border px-2 py-3 rounded-md hover:border-none hover:shadow-md max-w-[450px] my-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={review?.photo}
                    alt="userPhoto"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold">{review?.userName}</p>
                  <p className="text-sm">
                    <span className="font-bold">Ratings:</span> {review.ratings}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500">1 Days Ago</div>
            </div>
            <div className="text-sm font-poppins text-gray-500 mt-2">
              <hr />
              <p className="mt-2">
                {review?.message}
              </p>
            </div>
          </div>
    );
};

export default UserReviews;