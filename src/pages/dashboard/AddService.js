import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { sharedContext } from '../../context/UserContext';
import useTitleHelmet from '../../hooks/TitleHelmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user, setRefresh, refresh} = useContext(sharedContext);
    useTitleHelmet('add-service');
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/add-service', data)
        .then(res => {
            console.log(res);
            setRefresh(!refresh)
            toast.success('Successfully Added The Service!', {
                position: "top-center",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(err => console.error(err))
        reset()
    };
    console.log(errors);
    return (
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-xl text-gray-800 dark:text-gray-100 font-bold">Add a Service</p>
                        </div>
                    </div>
                    <ToastContainer/>
                    <div className="mx-auto">
                        <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                            <div className="rounded relative mt-8 h-48">
                                <img src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA=" alt="imgrandom" className="w-full h-full object-cover rounded absolute shadow" />
                                <div className="absolute bg-black opacity-30 top-0 right-0 bottom-0 left-0 rounded" />
                                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                    <img src={user?.photoURL} alt="imgrandom" className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                                    <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                                </div>
                            </div>
                            {/* Service Title  */}
                            <div className="mt-16 flex flex-col w-full">
                                <label htmlFor="serviceTitle" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Service Title
                                </label>
                                <input {...register("serviceTitle")} type="text" name="serviceTitle" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Service Title" />
                            </div>
                            {/* Price */}
                            <div className="mt-3 flex flex-col w-full">
                                <label htmlFor="price" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Price
                                </label>
                                <input {...register("price")} type="number" name="price" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Price of your services" />
                            </div>
                            {/* Image URL  */}
                            <div className="mt-3 flex flex-col w-full">
                                <label htmlFor="img" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Image URL
                                </label>
                                <input {...register("img")} type="text" name="img" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Give a image url relevant to your service" />
                            </div>
                            {/* Ratings  */}
                            <div className="mt-3 flex flex-col w-full">
                                <label htmlFor="ratings" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Ratings
                                </label>
                                <input 
                                type="number" 
                                name="ratings" 
                                min="1"
                                max="5"
                                {...register("ratings")}
                                required 
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Give us a initial ratings between 1 to 5" />
                            </div>
                            {/* Short Description  */}
                            <div className="mt-3 flex flex-col w-full">
                                <label htmlFor="shortDes" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Short Description 
                                </label>
                                <textarea name="shortDes" {...register("shortDes")} rows="4" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Write a short description within 200 Words..." />
                            </div>
                            {/* Details Description  */}
                            <div className="mt-3 flex flex-col w-full">
                                <label htmlFor="description" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Details Description 
                                </label>
                                <textarea name="description" {...register("description")} rows="7" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Write a details description within 500 Words..." />
                            </div>
                        <div className="container mx-auto w-11/12 xl:w-full">
                            <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                                <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                                <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                                    Add Service
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </form>
    );
};

export default AddService;