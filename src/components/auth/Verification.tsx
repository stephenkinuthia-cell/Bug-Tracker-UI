import Navbar from "../nav/Navbar";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type VerifyInputs = {
    email: string;
    code: string; // changed to string to handle leading zeros
};

const schema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email")
        .max(100, "Max 100 characters")
        .required("Email is required"),
    code: yup
        .string()
        .length(6, "Code must be 6 digits")
        .required("Verification code is required"),
});

export const Verification = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VerifyInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<VerifyInputs> = (data) => {
        console.log("Verification Data:", data);
        // TODO: Integrate API call to verify account
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white border border-gray-100">
                    
                    <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
                        Verify Your Account
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Enter your email and the 6-digit verification code sent to you.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email */}
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Email"
                            className="input input-bordered w-full p-3 text-lg rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm">{errors.email.message}</p>
                        )}

                        {/* Verification Code */}
                        <input
                            type="text"
                            {...register("code")}
                            placeholder="6-digit Verification Code"
                            className="input input-bordered w-full p-3 text-lg rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.code && (
                            <p className="text-red-600 text-sm">{errors.code.message}</p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full py-3 mt-2 text-lg hover:bg-blue-600 transition"
                        >
                            Verify Account
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-6 text-sm">
                        Didn’t receive a code?{" "}
                        <a href="/resend-code" className="text-blue-600 hover:underline">
                            Resend Code
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
