import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sharedContext } from "../../../context/UserContext";

const ReviewEditModal = ({ review, setUpdateReview }) => {
  const [openModal, setOpenModal] = useState(undefined);
  const { handleSignOut, user } =
    useContext(sharedContext);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["email"] = user?.email;
    setOpenModal(undefined);
    fetch(`https://assignment-11-server-lyart-rho.vercel.app/update-review/${review?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return handleSignOut();
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Successfully Updated The Review!", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUpdateReview(false ? false:true)
      });
    reset();
  };
  
/*   if(errors){
    console.log(errors);
  } */

  return (
    <>
      <button
        onClick={() => setOpenModal("default")}
        className="text-blue-600 mr-3"
      >
        Edit
      </button>
      <ToastContainer />
      <Modal
        show={openModal === "default"}
        size="2xl"
        popup={true}
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header className="ml-7 uppercase">Edit Item</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="reviewTxt" value="Your email" />
                </div>
                <Textarea
                  name="message"
                  {...register("message", {
                    maxLength: {
                      value: 150,
                      message: "Text should be write within 150 characters",
                    },
                  })}
                  rows="4"
                  placeholder="Please write your review again to confirm edit..."
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ratings" value="Ratings" />
                </div>
                <TextInput
                  name="ratings"
                  type="number"
                  {...register("ratings")}
                  placeholder="Please put a ratings between 1 to 5"
                  min="1"
                  max="5"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-orange-500 px-4 py-2 rounded-lg text-bold hover:bg-orange-600"
                >
                  Confirm
                </button>
                <Button color="gray" onClick={() => setOpenModal(undefined)}>
                  Decline
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewEditModal;
