'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBriefcase,
  IconCheck
} from "@tabler/icons-react";

type ProfileFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  occupation: string;
  bio: string;
};

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: "Nitin",
      lastName: "kumar",
      email: "abc@example.com",
      phone: "978xxxxxx",
      location: "Rewari,Haryana",
      occupation: "Software Engineer",
      bio: "Passionate about building great software and solving complex problems."
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 gap-y-6">
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-start">
              <span className="bg-white pr-3 text-base font-semibold text-gray-900">Personal Information</span>
            </div>
          </div>
          
         <LabelInputContainer>
  <Label htmlFor="firstName" className="text-gray-700">Name</Label>
  <div className="relative group">
    <IconUser className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
    <Input 
      id="firstName"
      className="pl-10 border-gray-200 hover:border-primary focus:border-primary transition-colors"
      {...register("firstName", { required: "Name is required" })}
    />
  </div>
  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
</LabelInputContainer>


          <LabelInputContainer>
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <div className="relative group">
              <IconMail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              <Input 
                id="email"
                type="email"
                className="pl-10 border-gray-200 hover:border-primary focus:border-primary transition-colors"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="phone" className="text-gray-700">Phone</Label>
            <div className="relative group">
              <IconPhone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              <Input 
                id="phone"
                className="pl-10 border-gray-200 hover:border-primary focus:border-primary transition-colors"
                {...register("phone")}
              />
            </div>
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="location" className="text-gray-700">Location</Label>
            <div className="relative group">
              <IconMapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              <Input 
                id="location"
                className="pl-10 border-gray-200 hover:border-primary focus:border-primary transition-colors"
                {...register("location")}
              />
            </div>
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="occupation" className="text-gray-700">Occupation</Label>
            <div className="relative group">
              <IconBriefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              <Input 
                id="occupation"
                className="pl-10 border-gray-200 hover:border-primary focus:border-primary transition-colors"
                {...register("occupation")}
              />
            </div>
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="bio" className="text-gray-700">Bio</Label>
            <textarea
              id="bio"
              className={cn(
                "flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary transition-colors"
              )}
              {...register("bio")}
            />
          </LabelInputContainer>
        </div>
      </div>

     <div className="flex justify-end">
  <button
    type="submit"
    disabled={!isDirty}
    className={cn(
      "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors",
      "bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "group relative"
    )}
  >
    Save Changes
    <IconCheck className="ml-2 h-4 w-4" />
    <BottomGradient />
  </button>

  <button
  type="button"
 onClick={() => window.location.reload()}

  className={cn(
    "ml-4 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors",
    "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
  )}
>
  Cancel
</button>

</div>

    </form>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
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