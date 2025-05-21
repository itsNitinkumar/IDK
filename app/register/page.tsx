// // "use client";

// // import React from "react";
// // import { useForm, SubmitHandler } from "react-hook-form";
// // import { Form, Input, Checkbox, Button, Link } from "@heroui/react";

// // interface FormInputs {
// //   name: string;
// //   email: string;
// //   password: string;
// //   terms: boolean;
// // }

// // const App: React.FC = () => {
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     formState: { errors, isSubmitting },
// //     reset
// //   } = useForm<FormInputs>();

// //   const password = watch("password");

// //   const validatePassword = (value: string): true | string => {
// //     if (value.length < 4) {
// //       return "Password must be 4 characters or more";
// //     }
// //     if ((value.match(/[A-Z]/g) || []).length < 1) {
// //       return "Password needs at least 1 uppercase letter";
// //     }
// //     if ((value.match(/[^a-z]/gi) || []).length < 1) {
// //       return "Password needs at least 1 symbol";
// //     }
// //     return true;
// //   };

// //   const onSubmit: SubmitHandler<FormInputs> = async (data) => {
// //     console.log('Form submitted:', data);
// //     // registration logic 
// //   };

// //   return (
// //     <Form
// //       className="w-full justify-center items-center space-y-4"
// //       onSubmit={handleSubmit(onSubmit)}
// //       onReset={() => reset()}
// //     >
// //       <div className="flex flex-col gap-4 max-w-md">
// //         <Input
// //           {...register("name", {
// //             required: "Please enter your name",
// //             validate: (value) => {
// //               if (value.length < 2) {
// //                 return "Name must be at least 2 characters";
// //               }
// //               return true;
// //             }
// //           })}
// //           isRequired
// //           label="Name"
// //           labelPlacement="outside"
// //           placeholder="Enter your name"
// //           errorMessage={errors.name?.message}
// //         />

// //         <Input
// //           {...register("email", {
// //             required: "Please enter your email",
// //             pattern: {
// //               value: /\S+@\S+\.\S+/,
// //               message: "Please enter a valid email address"
// //             }
// //           })}
// //           isRequired
// //           label="Email"
// //           labelPlacement="outside"
// //           placeholder="Enter your email"
// //           type="email"
// //           errorMessage={errors.email?.message}
// //         />

// //         <Input
// //           {...register("password", {
// //             required: "Please enter your password",
// //             validate: validatePassword
// //           })}
// //           isRequired
// //           label="Password"
// //           labelPlacement="outside"
// //           placeholder="Enter your password"
// //           type="password"
// //           errorMessage={errors.password?.message}
// //         />

// //         <Checkbox
// //           {...register("terms", {
// //             required: "Please accept the terms and conditions"
// //           })}
// //           isRequired
// //           classNames={{
// //             label: "text-small",
// //           }}
// //           isInvalid={!!errors.terms}
// //         >
// //           I agree to the terms and conditions
// //         </Checkbox>

// //         {errors.terms && (
// //           <span className="text-danger text-small">{errors.terms.message}</span>
// //         )}

// //         <div className="flex gap-4">
// //           <Button 
// //             className="w-full" 
// //             color="primary" 
// //             type="submit"
// //             isLoading={isSubmitting}
// //             disabled={isSubmitting}
// //           >
// //             {isSubmitting ? 'Creating account...' : 'Create account'}
// //           </Button>
// //           <Button type="reset" variant="bordered">
// //             Reset
// //           </Button>
// //         </div>
// //         <div className="flex justify-center">
// //           <Link href="/login" size="sm" color="primary">
// //             Already have an account? Login
// //           </Link>
// //         </div>
// //       </div>
// //     </Form>
// //   );
// // };

// // export default App;
// import SignupFormDemo from "@/components/signup-form-demo";
// export default function Register() {
//   return (
//     <div className="flex justify-center items-center h-screen"    >
//       <SignupFormDemo />
//     </div>
//   );
// }
"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

interface FormInputs {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

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

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log('Form submitted:', data);
    // Registration logic here
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Create your account
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Join us today and get access to all features
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters"
              }
            })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email"
              }
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">{errors.password.message}</span>
          )}
        </LabelInputContainer>

        <div className="mb-8">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              {...register("terms", {
                required: "You must accept the terms and conditions"
              })}
            />
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              I agree to the terms and conditions
            </span>
          </label>
          {errors.terms && (
            <span className="text-sm text-red-500 block mt-1">{errors.terms.message}</span>
          )}
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Sign up →"}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Sign up with GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Sign up with Google
            </span>
            <BottomGradient />
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}