import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { sharedContext } from "../../context/UserContext";

const Register = () => {
    const {handleCreateUser, signUpError, user} = useContext(sharedContext);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const passRef = useRef();
    const conPassRef = useRef();
    const password = watch ("password");

    const onSubmit = data => {
        const email = data.email;
        const firstName = data.firstName;
        const lastName = data.lastName;
        const name = firstName + ' ' + lastName;
        const password = data.password;
        const phone = data.phone;
        const photoURL = data.photoURL;
        console.log(email, firstName, lastName, password, phone, photoURL);
        handleCreateUser(email, password, photoURL, phone, name)
        if(user){
          reset();
        }
    };
    console.log(errors);

  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-5 bg-blue-500"></div>
        <div className="col-span-7 py-10 px-10">
          <div className="bg-gray-300 p-5 rounded-lg">
            <div className="">
              <img
                src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
                alt="brandImg"
                className="w-[50px] h-[50px]"
              />
            </div>
            <h1 className="text-2xl font-bold">Create your Account</h1>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login here.
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fName" className="block font-bold text-sm">
                  First Name
                </label>
                <input
                    required
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label htmlFor="lName" className="block font-bold text-sm">
                  Last Name
                </label>
                <input
                    required
                  type="text"
                  {...register("lastName")}
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label htmlFor="Email" className="block font-bold text-sm">
                  Email
                </label>
                <input
                    required
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label htmlFor="Email" className="block font-bold text-sm">
                  Contact No.
                </label>
                <input
                  type="number"
                  {...register("phone")}
                  name="phone"
                  placeholder="Your Phone No"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label htmlFor="Password" className="block font-bold text-sm">
                  Password
                </label>
                <input
                    required
                  type="password"
                  ref={passRef}
                  {...register("password", { pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i, message: "Password should be minimum eight characters, at least one letter and one number"}})}
                  name="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label htmlFor="ConfirmPassword" className="block font-bold text-sm">
                  Confirm Password
                </label>
                <input
                  required
                  type="password"
                  ref={conPassRef}
                  {...register("confirmPassword", {required: true, validate: (value) => value === password || "Password Doesn't Match"})}
                  name="confirmPassword"
                  placeholder="Retype Password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              {
                errors.password?.message &&
                <p className="text-red-600 col-span-2"><span className="font-bold">Error:</span>{errors.password?.message}</p>
              }
              {
                errors.confirmPassword?.message &&
                <p className="text-red-600 col-span-2"><span className="font-bold">Error:</span>{errors.confirmPassword?.message}</p>
              }
              
              <div className="col-span-2">
                <label htmlFor="PhotoURL" className="block font-bold text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  {...register("photoURL")}
                  name="photoURL"
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="col-span-2 flex">
                <input
                  type="checkbox"
                  {...register("terms", {required: "You must Have to Accept Our Terms and Condition"})}
                  name="terms"
                  className="mr-3 py-2"
                />
                <span>By signing up, you are creating a account, and you agree to Our's Terms of Use and Privacy Policy.</span>
              </div>
              <div className="col-span-2 flex">
                <input
                  type="checkbox"
                  name="updates"
                  className="mr-3 py-2"
                />
                <span>Email me about product updates and resources.</span>
              </div>
              {
                errors.terms?.message && 
                <p className="text-red-600 col-span-2"><span className="font-bold">Caution:</span>{errors.terms?.message}</p>
              }
              <div className="col-span-2">
                {
                    signUpError &&
                    <p className="text-red-500"><span className="font-bold">Error: </span>{signUpError}</p>
                }
              </div>
              <button type="submit" className="py-2 px-5 bg-sky-500 rounded-lg col-span-2 uppercase font-bold text-white hover:bg-sky-600 transition-all">Create An Account</button>
            </form>
          </div>
        </div>
        {/* ...........  */}
      </div>
    </div>
  );
};

export default Register;
