import Navbar from "../nav/Navbar";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type LoginInputs = {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email")
        .max(100, "Max 100 characters")
        .required("Email is required"),
    password: yup
        .string()
        .min(6, "Min 6 characters")
        .max(20, "Max 20 characters")
        .required("Password is required"),
});

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        console.log("Login Data:", data);
        // Here you can integrate your API call
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white border border-gray-100">
                    
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        BugTrackr Login
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Sign in to manage your issues and bugs efficiently
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className="input input-bordered w-full text-lg p-3 focus:ring-2 focus:ring-blue-400 rounded-lg"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <input
                                type="password"
                                {...register("password")}
                                placeholder="Password"
                                className="input input-bordered w-full text-lg p-3 focus:ring-2 focus:ring-blue-400 rounded-lg"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Forgot password */}
                        <div className="text-right">
                            <a href="/forgot-password" className="text-blue-600 text-sm hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-2 text-lg bg-blue-300 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Optional: Register link */}
                    <p className="text-center text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-blue-600 hover:underline">
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
