
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const [showpassword, setshowpassword] = useState(null)
	const { createUser, updateUserProfile, setloader } = useContext(AuthContext)
	const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
	const from = "/";
    const onSubmit = (data) => {
		// data.preventDefault();
		const { email, password, image, fullName } = data;
		if (password.length < 6) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "password must have a  6 letter",
				showConfirmButton: false,
				timer: 1500
			});
			//toast.error('error.message')
			return
		}
		if (!/[A-Z]/.test(password)) {
			Swal.fire({
					position: "top-end",
					icon: "error",
					title: "password must have a  uppercase  letter",
					showConfirmButton: false,
					timer: 1500
				});
			//toast.error("password must have a  uppercase  letter")
			return
		}

		if (!/[a-z]/.test(password)) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "password must have a capital letter",
				showConfirmButton: false,
				timer: 1500
			});
			//toast.error('password must have a capital letter')
			return
		}

		createUser(email, password)

			.then(result => {
				console.log('user created succesfully !', result.user)
				updateUserProfile(fullName, image)
				navigate(from);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: " add art & craft items ",
					showConfirmButton: false,
					timer: 1500
				});
				//toast.success('user register successfully')
				const createdAt = result.user?.metadata?.creationTime;
				const users = { fullName, image, email, createdAt: createdAt };
				fetch('http://localhost:5000/user', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(users)
				})
					.then(res => res.json())
					.then(data => {

						console.log('inside post', data)
						if (data.insertedId) {
							//	alert('users added successfully')
							toast.success('users added successfully')
                        }
					})



			})
			.catch(error => {
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: "try again",
					showConfirmButton: false,
					timer: 1500
				});
			//	toast.error(error.message)
				console.log('error', error.message)
				setloader(false)
			});



	};

    return (
        <div className="hero min-h-screen bg-base-200">
        <Helmet>
             <title>shopSwiftly | Register </title>
         </Helmet>
         <div className="hero-content flex-col md:flex-row">
             <div className="text-center lg:text-left">

                 <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
             </div>
             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <h1 className="text-3xl font-bold text-center">register now!</h1>
                     <div className="form-control">
                         <label htmlFor="text" className="label">
                             <span className="label-text">name</span>
                         </label>
                         <input type="text" placeholder="type your name" name="text" id="text" className="input input-bordered" required 
                         {...register("fullName", { required: true })}/>
                         {errors.fullName && (
                         <span className="text-red-500">This field is required</span>
                     )}
                     </div>

                     <div className="form-control">
                         <label htmlFor="email" className="label">
                             <span className="label-text">Email</span>
                         </label>
                         <input type="email" name="email" id="email" placeholder="email" className="input input-bordered" required 
                         {...register("email", { required: true })}/>
                         {errors.email && (
                         <span className="text-red-500">This field is required</span>
                     )}
                     </div>
                     <div className="form-control">
                     <label htmlFor="image" className="block mb-2 text-sm">Image Url</label>
                     <input type="text" name="image" id="image" placeholder="image url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                         {...register("image")}
                     />
                     </div>
                     <div className="form-control ">
                         <label className="label">
                             <span className="label-text">Password</span>
                         </label>
                         <div className="flex items-center gap-x-2 relative">
                         <input type={showpassword ? "text" : "password"}  placeholder="password" className="input input-bordered w-full" required name="password" id="password"
                         {...register("password", { required: true })}/>
                         <span className="absolute right-3" onClick={() => setshowpassword(!showpassword)}>
                         {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                     </span>
                     {errors.password && (
                         <span className="text-red-500">This field is required</span>
                     )}
                         </div>
                         
                     </div>
                     
                    
                     <div className="form-control mt-6">
                         <button className="btn btn-primary">Login</button>
                     </div>
                 </form>
                 <div className="flex items-center pt-4 space-x-1">
                     <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                     <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                     <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                 </div>

                 <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                     <span className="text-sm text-gray-600 dark:text-gray-200">alreday  have an account? </span>

                     <Link to='/login' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">login</Link>
                 </div>

             </div>
         </div>
         <ToastContainer />
     </div>
    );
};

export default Register;