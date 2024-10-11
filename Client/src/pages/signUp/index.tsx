import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Germany from "../../assets/hero-background.png";
import useAuthStore from "@/store/authStore";
import { register } from "@/hooks/auth";

// Updated schema with the provided validation rules
const formSchema = z
  .object({
    first_name: z
      .string()
      .min(1, { message: "First name is required" })
      .max(255, { message: "First name must not exceed 255 characters" }),
    last_name: z
      .string()
      .min(1, { message: "Last name is required" })
      .max(255, { message: "Last name must not exceed 255 characters" }),
    address: z.string().min(1, { message: "Address is required" }),
    postal_code: z
      .string()
      .min(1, { message: "Postal code is required" })
      .max(10, { message: "Postal code must not exceed 10 characters" }),
    city: z
      .string()
      .min(1, { message: "City is required" })
      .max(255, { message: "City must not exceed 255 characters" }),
    country: z
      .string()
      .min(1, { message: "Country is required" })
      .max(255, { message: "Country must not exceed 255 characters" }),
    mobile_phone_number: z
      .string()
      .min(1, { message: "Mobile phone number is required" })
      .max(20, { message: "Phone number must not exceed 20 characters" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .max(255, { message: "Email must not exceed 255 characters" }),
    confirmation_of_knowledge: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    password_confirmation: z.string().min(6, {
      message: "Password confirmation must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

const SignUp = () => {
  const { setUser, setToken } = useAuthStore();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Hook Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      address: "",
      postal_code: "",
      city: "",
      country: "",
      mobile_phone_number: "",
      email: "",
      confirmation_of_knowledge: false,
      password: "",
      password_confirmation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const { user, token, message } = await register(values);
      console.log(user, token, message);
      setUser(user);
      setToken(token);
      toast.success(
        message ||
          "Registration successful. A verification code has been sent to your email address."
      );
      navigate("/email-verification");
    } catch (error: any) {
      if (error.response?.status === 422) {
        toast.error("User already exists");
        return;
      }
      toast.error("Something went wrong, please try again");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white text-black">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full min-h-screen md:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-10 font-poppins md:mt-12 mt-0">
          <p className="text-3xl font-semibold mb-6">Get Started Now</p>

          {/* Form Fields */}
          <motion.form
            initial={{ opacity: 0, x: -75, scale: 0.99 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* First Name and Last Name in one line */}
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("first_name")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.first_name?.message}
                </p>
              </div>

              <div className="w-full">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("last_name")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.last_name?.message}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                {...form.register("email")}
              />
              <p className="text-red-500 text-xs">
                {form.formState.errors.email?.message}
              </p>
            </div>

            {/* Mobile Phone Number */}
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="mobile_phone_number"
                className="block text-sm font-medium"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="mobile_phone_number"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                {...form.register("mobile_phone_number")}
              />
              <p className="text-red-500 text-xs">
                {form.formState.errors.mobile_phone_number?.message}
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                {...form.register("address")}
              />
              <p className="text-red-500 text-xs">
                {form.formState.errors.address?.message}
              </p>
            </div>

            {/* City, Country, and Postal Code in one line */}
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <div className="w-full">
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("city")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.city?.message}
                </p>
              </div>

              <div className="w-full">
                <label htmlFor="country" className="block text-sm font-medium">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("country")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.country?.message}
                </p>
              </div>

              <div className="w-full">
                <label
                  htmlFor="postal_code"
                  className="block text-sm font-medium"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal_code"
                  placeholder="Postal Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("postal_code")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.postal_code?.message}
                </p>
              </div>
            </div>

            {/* Password and Confirm Password in one line */}
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <div className="w-full">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("password")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.password?.message}
                </p>
              </div>

              <div className="w-full">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-primary"
                  {...form.register("password_confirmation")}
                />
                <p className="text-red-500 text-xs">
                  {form.formState.errors.password_confirmation?.message}
                </p>
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                id="confirmation_of_knowledge"
                className="mr-1"
                {...form.register("confirmation_of_knowledge")}
              />
              <label htmlFor="confirmation_of_knowledge" className="text-xs">
                I agree to the terms and conditions
              </label>
            </div>
            <p className="text-red-500 text-xs">
              {form.formState.errors.confirmation_of_knowledge?.message}
            </p>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-hover w-full bg-primary text-white py-2 rounded-full font-semibold text-lg"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </motion.form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm font-medium">
            Already have an account?{" "}
            <Link to="/login" className="btn-hover text-primary font-semibold">
              Login
            </Link>
          </div>
        </div>

        {/* Right side with background image */}
        <div
          className="w-full md:w-1/2 md:rounded-s-3xl min-h-[300px]"
          style={{
            backgroundImage: `url(${Germany})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUp;
