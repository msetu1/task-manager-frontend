/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from './registrationValidation';
import { registerUser } from '@/services';
import { toast } from 'sonner';

export default function RegisterForm() {
 const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");
    // console.log(password, confirmPassword);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
    console.log(data)
  };

  return (
    <div className="flex flex-col md:flex-row  bg-white">
      {/* Left Side Image */}
      <div className="hidden md:block lg:w-[719px] lg:h-[800px] ">
        <Image
          src="https://i.ibb.co/NdxmtHJb/Group-47726.png"
          alt="Sign Up"
          width={719}
          height={800}
          className='lg:h-[800px]'
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 lg:w-[721px] flex justify-center items-center lg:px-[80px] lg:h-[800px]">
        <div className="w-full max-w-md md:max-w-full">
          <div className="text-center mb-6">
            <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900">Sign Up</h2>
            <p className="text-[16px] md:text-[16px] text-gray-500 mt-2">
              To Create Account, Please Fill in the Form Below.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
              {/* Full Name */}
              
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        value={field.value || ""}
                        className="bg-white text-sm md:text-base py-3 px-4 rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                        value={field.value || ""}
                        className="bg-white text-sm md:text-base py-3 px-4 rounded"
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
                        placeholder="**********"
                        {...field}
                        value={field.value || ""}
                        className="bg-white text-sm md:text-base py-3 px-4 rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Retype password"
                        {...field}
                        value={field.value || ""}
                        className="bg-white text-sm md:text-base py-3 px-4 rounded"
                      />
                    </FormControl>
                    {confirmPassword && password !== confirmPassword ? (
                  <FormMessage> Password does not match </FormMessage>
                ) : (
                  <FormMessage />
                )}
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
              disabled={!!confirmPassword && password !== confirmPassword}
                type="submit"
                className="w-full bg-[#2AE59C] hover:bg-[#20cd8a] text-black py-3 md:py-4 text-sm md:text-base"
              >
                 {isSubmitting ? "Registering...." : "Register"}
              </Button>
            </form>
          </Form>

          {/* Footer Text */}
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
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-black hover:underline">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
