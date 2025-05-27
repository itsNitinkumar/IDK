'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  IconBrandGoogle,
  IconBrandTwitter,
  IconBrandFacebook,
  IconUser,
  IconMail,
  IconLock
} from "@tabler/icons-react";
type FormData = {
  Name: string;

  email: string;
  password: string;
};

export default function SignupFormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-gray-100 p-4 md:rounded-2xl md:p-8 dark:bg-black">
       <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <IconUser className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <Input 
                id="name" 
                placeholder="Tyler" 
                type="text" 
                className="pl-10"
                {...register("Name", { required: true })} 
              />
            </div>
            {errors.Name && <p className="text-red-500 text-sm">Name is required</p>}
          </LabelInputContainer>
          
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <IconMail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <Input 
              id="email" 
              placeholder="projectmayhem@fc.com" 
              type="email" 
              className="pl-10"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })} 
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <IconLock className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <Input 
              id="password" 
              placeholder="••••••••" 
              type="password" 
              className="pl-10"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })} 
            />
          </div>
          {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-primary text-white hover:bg-primary-light transition-colors duration-200"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />

        <div className="flex flex-row space-x-2">
          <button
            className="group/btn relative flex h-10 w-full items-center justify-center gap-2 rounded-md bg-white hover:bg-gray-50 border border-primary/20 hover:border-primary/30 transition-colors duration-200"
            type="button"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>

          <button
            className="group/btn relative flex h-10 w-full items-center justify-center gap-2 rounded-md bg-secondary hover:bg-secondary-light text-white transition-colors duration-200"
            type="button"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </svg>
          </button>

          <button
            className="group/btn relative flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary-light text-white transition-colors duration-200"
            type="button"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
        </div>          
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode}) => (
  
  <button
    className="group/btn shadow-input relative flex border-2 border justify-center gap-4 h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
    type="button"
  >
    {icon}
    
    <BottomGradient />
  </button>)
  ;