'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconMail } from "@tabler/icons-react";
import Link from "next/link";

type FormData = {
  email: string;
};

export default function ForgotPasswordFormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", data);
    // Here you would typically call your password reset API
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-gray-100 p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Reset Your Password</h3>
          <p className="mt-2 text-sm text-gray-500">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <IconMail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <Input 
              id="email" 
              placeholder="you@example.com" 
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-primary text-white hover:bg-primary-light transition-colors duration-200"
          type="submit"
        >
          Send Reset Instructions &rarr;
          <BottomGradient />
        </button>

        <div className="mt-6 text-center">
          <Link 
            href="/login" 
            className="text-sm text-primary hover:text-primary-dark hover:underline transition-colors"
          >
            Back to Login
          </Link>
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