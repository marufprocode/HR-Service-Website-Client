import React, { useContext, /* useEffect, */ useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sharedContext } from "../../context/UserContext";



const Login = () => {
    const {handleGoogleSignIn, signInError, handleSignIn} = useContext(sharedContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
	  const location = useLocation();

	  let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, /* formState: { errors } */ } = useForm();


/*     if(user?.uid){
      if(location.search === '?back'){
        window.history.back();
      }
    } */

    const getAccessToken = (email, id) => {
      fetch('http://localhost:5000/jwt', {
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body: JSON.stringify({email: email, id: id})
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              localStorage.setItem('access-token', data.token);
            });
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);
        handleSignIn(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if(user){
            getAccessToken(user?.email, user?.uid);
            navigate(from, { replace: true });
          }
        })
        .catch((error) => {
          console.error('error', error);
        })          
    };

    const googleSignIn = () => {
      handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        if(user){
          getAccessToken(user?.email, user?.uid);
          navigate(from, { replace: true });
        }
      }).catch((error) => {
          console.error('error', error);
      })
    }

    

  return (
    <div className="flex justify-center items-center relative min-h-screen">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="loginBG" className="absolute z-[-1] object-cover min-h-[100%] min-w-[100%]"/>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-slate-400 bg-opacity-[70%] dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-200">
          Dont have account? 
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="ml-1 text-blue-800 focus:underline hover:underline"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            onClick={googleSignIn}
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 border-blue-600 border-2 bg-gray-800 hover:bg-blue-800 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-blue-600"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className="text-white">Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", {required: true})}
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="/#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                required
                {...register("password", {required: true})}
                type={showPass? "text":"password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
              <div className="absolute right-4 bottom-3 cursor-pointer" onClick={()=>setShowPass(!showPass)}>{showPass? <FaEyeSlash className="text-white"/>:<FaEye className="text-white"/>}</div>
            </div>
          </div>
          <div>
            {
              signInError &&
              <p className="text-red-600"><span className="font-bold">Error:</span>{signInError}</p>
            }
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition-all dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
