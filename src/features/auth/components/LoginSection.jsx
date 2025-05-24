"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { userLogin } from "@/services/auth";
import { toast } from "sonner";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";

const LoginSection = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const { token, setToken } = useAccountStore();

  const router = useRouter();

  const onSubmit = async (data) => {
    //de lo so yin try catch use ya ml
    try {
      const res = await userLogin({
        email: data.email,
        password: data.password,
      });
      console.log(res);
      const json = await res.json();
      console.log(json);
      if (!res.ok) {
        throw new Error(json.message);
      }
      setToken(json.token);

      //programmatic route
      router.push("/dashboard");

      toast.success("Login Successfully");
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <Link
          href="/"
          className="flex  font-montserrat items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          INVOICE APP
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium  dark:text-white ${
                    errors.email ? "text-red-500" : "text-gray-900"
                  }`}
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is Required" })}
                  className={`bg-gray-50 border  text-gray-900 rounded-lg block w-full p-2.5 outline-none
                     ${
                       errors.email
                         ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                         : "border-gray-300 focus:ring-primary-600 focus:border-primary-600 "
                     }`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={`block mb-2 text-sm font-medium  dark:text-white ${
                    errors.password ? "text-red-500" : "text-gray-900"
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="••••••••"
                  className={`bg-gray-50 border  text-gray-900 rounded-lg block w-full p-2.5 outline-none
                     ${
                       errors.password
                         ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                         : "border-gray-300 focus:ring-primary-600 focus:border-primary-600 "
                     }`}
                />
                {errors.password && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      {...register("remember")}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full disabled:opacity-65 duration-200 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {isSubmitting ? ( // Default values shown
                  <p>Loaing....</p>
                ) : (
                  <span>Submit</span>
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
