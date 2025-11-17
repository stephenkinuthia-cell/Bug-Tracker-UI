import Navbar from "../nav/Navbar";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type RegisterInputs = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    confirmPassword: string;
};

const schema = yup.object({
    first_name: yup.string().max(50, "Max 50 characters").required("First name is required"),
    last_name: yup.string().max(50, "Max 50 characters").required("Last name is required"),
    email: yup.string().email("Invalid email").max(100, "Max 100 characters").required("Email is required"),
    phone_number: yup.string().max(20, "Max 20 characters").required("Phone number is required"),
    password: yup.string().min(6, "Min 6 characters").max(255, "Max 255 characters").required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
});

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
        console.log("Registration Data:", data);
        // TODO: integrate API call for registration
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white border border-gray-100">

                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        Create Your Account
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Sign up for BugTrackr and start managing your bugs and issues efficiently
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* First Name */}
                        <input
                            type="text"
                            {...register("first_name")}
                            placeholder="First Name"
                            className="input input-bordered w-full text-lg p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.first_name && (
                            <p className="text-red-600 text-sm">{errors.first_name.message}</p>
                        )}

                        {/* Last Name */}
                        <input
                            type="text"
                            {...register("last_name")}
                            placeholder="Last Name"
                            className="input input-bordered w-full text-lg p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.last_name && (
                            <p className="text-red-600 text-sm">{errors.last_name.message}</p>
                        )}

                        {/* Email */}
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Email"
                            className="input input-bordered w-full text-lg p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm">{errors.email.message}</p>
                        )}

                        {/* Phone Number */}
                        <input
                            type="text"
                            {...register("phone_number")}
                            placeholder="Phone Number"
                            className="input input-bordered w-full text-lg p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.phone_number && (
                            <p className="text-red-600 text-sm">{errors.phone_number.message}</p>
                        )}

                        {/* Password */}
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Password"
                            className="input input-bordered w-full text-lg p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm">{errors.password.message}</p>
                        )}

                        {/* Confirm Password */}
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            placeholder="Confirm Password"
                            className="input input-bordered w-full text-lg p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-2 text-lg bg-blue-300 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                            Register
                        </button>

                    </form>

                    {/* Already have an account */}
                    <p className="text-center text-gray-600 mt-6">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 hover:underline">
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
