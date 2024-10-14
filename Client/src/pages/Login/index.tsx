import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Germany from "../../assets/hero-background.png";
import useAuthStore from "@/store/authStore";
import { login } from "@/hooks/auth";

// Define the schema with Zod for validation
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setToken } = useAuthStore();

  // React Hook Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const { user, token, message } = await login(
        values.email,
        values.password
      );
      setUser(user);
      setToken(token);
      toast.success(message || "Logged in successfully");
      navigate("/");
    } catch (error: any) {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password");
      } else if (error.response?.status === 402) {
        toast.error(
          error.response.data.message || "Email verification required"
        );
        setTimeout(() => navigate("/email-verification"), 1500);
      } else if (error.response?.status === 403) {
        toast.error(
          error.response.data.message || "Video verification required"
        );
        setTimeout(() => navigate("/video-verification"), 1500);
      } else {
        toast.error("Something went wrong, please try again");
        console.error(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white text-black">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/2 lg:min-h-screen flex flex-col justify-center px-6 lg:px-16 py-10 font-poppins">
          <p className="text-3xl font-semibold mb-6">Welcome Back</p>

          {/* Form Fields */}
          <motion.form
            initial={{ opacity: 0, x: -75, scale: 0.99 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Email */}
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="email" className="w-full lg:w-1/3 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-primary"
                {...form.register("email")}
              />
              <p className="text-red-500 text-sm">
                {form.formState.errors.email?.message}
              </p>
            </div>

            {/* Password */}
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="password" className="w-full lg:w-1/3 text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-primary"
                {...form.register("password")}
              />
              <p className="text-red-500 text-sm">
                {form.formState.errors.password?.message}
              </p>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-hover w-full bg-primary text-white py-2 rounded-full font-semibold text-lg"
            >
              {isSubmitting ? "Logging in..." : "Sign In"}
            </button>
          </motion.form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm font-medium">
            Don't have an account?{" "}
            <Link to="/signup" className="btn-hover text-primary font-semibold">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right side with background image */}
        <div
          className="w-full lg:w-1/2 lg:rounded-s-3xl min-h-[300px]"
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

export default Login;
