/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginUser } from "@/services";
import { loginSchema } from "./loginValidation";

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res)
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row  bg-white">
      {/* Left Side Image */}
      <div className="hidden md:block lg:w-[719px] lg:h-[800px]">
        <Image
          src="https://i.ibb.co/Tx5pLQFd/Group-47725.png"
          alt="Login Illustration"
          width={719}
          height={800}
          className='lg:h-[800px]'
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 lg:w-[721px] flex justify-center items-center lg:px-[80px] lg:h-[800px]">
        <div className="w-full max-w-md md:max-w-full">
          <div className="text-center mb-6">
            <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900">Login</h2>
            <p className="text-[16px] md:text-[16px] text-gray-500 mt-2">
             Welcome Back. Please Enter your Details to Log In.
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        value={field.value || ""}
                        className="bg-white py-3 px-4 text-sm md:text-base rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        value={field.value || ""}
                        className="bg-white py-3 px-4 text-sm md:text-base rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Checkbox and Link */}
              <div className="flex justify-between items-center text-sm text-gray-600 mb-[50px]">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-black hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
               <Button
                type="submit"
                className="w-full bg-[#2AE59C] hover:bg-[#20cd8a] text-black py-3 md:py-4 text-sm md:text-base"
              >
                {isSubmitting ? "Logging...." : "Login"}
              </Button>
            </form>
          </Form>
         
          <div className="text-center text-sm text-gray-600 mt-6">
            
            <div className="flex items-center justify-center mb-[41px]">
<Image
          src="https://i.ibb.co/352k4LZC/Line-52.png"
          alt=""
          width={500}
          height={0}
          className=''
        />
       <h2 className="text-xl mx-4 font-semibold">Or</h2>
<Image
          src="https://i.ibb.co/352k4LZC/Line-52.png"
          alt=""
          width={500}
          height={0}
          className=''
        />
            </div>
            
            Don’t have an account?{" "}
            <a href="/register" className="font-semibold text-black hover:underline">
              Sign Up
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
