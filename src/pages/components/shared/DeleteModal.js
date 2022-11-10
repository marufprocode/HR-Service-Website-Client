import { Modal } from "flowbite-react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import 'react-toastify/dist/ReactToastify.css';


const DeleteModal = ({review, handleDeleteReview}) => {
  const [openModal, setOpenModal] = useState(undefined);
  const handleDelete = (id) => {
    handleDeleteReview(id);
    setOpenModal(undefined);
    toast.success('Successfully Deleted the review!', {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <>
      <ToastContainer/>
      <button onClick={() => setOpenModal("default")} className="text-red-600">
        Delete
      </button>
      <Modal
        show={openModal === "default"}
        size="md"
        popup={true}
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <button color="failure" className="bg-orange-600 px-4 py-2 rounded-lg text-bold" onClick={() => handleDelete(review._id)}>
                Yes, I'm sure
              </button>
              <button color="gray" className="bg-gray-500 px-4 py-2 rounded-lg text-bold" onClick={() => setOpenModal(undefined)}>
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteModal;
