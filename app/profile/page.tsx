'use client';
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
  Select,
  SelectItem
} from "@heroui/react";

interface ProfileFormData {
  name: string;
  age: string;
  gender: string;
  phoneNo: string;
  profilePic: string;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: "Zoey Lang",
      age: "25",
      gender: "female",
      phoneNo: "+1234567890",
      profilePic: "https://heroui.com/avatars/avatar-1.png"
    }
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      //  API call to update the profile
      console.log('Submitting profile data:', data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="max-w-[600px] mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader className="flex flex-col gap-3">
            <div className="flex justify-between w-full">
              <div className="flex gap-5">
                <Controller
                  name="profilePic"
                  control={control}
                  rules={{
                    required: "Profile picture URL is required",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Please enter a valid URL"
                    }
                  }}
                  render={({ field }) => (
                    <Avatar
                      isBordered
                      radius="full"
                      size="lg"
                      src={field.value}
                    />
                  )}
                />
                {!isEditing ? (
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-large font-semibold leading-none text-default-600">{field.value}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{field.value.toLowerCase().replace(' ', '')}</h5>
                      </div>
                    )}
                  />
                ) : null}
              </div>
              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <Button
                      color="danger"
                      radius="full"
                      size="sm"
                      onClick={handleCancel}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      radius="full"
                      size="sm"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <Button
                    color="primary"
                    radius="full"
                    size="sm"
                    onClick={handleEdit}
                    type="button"
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0">
            {isEditing ? (
              <div className="flex flex-col gap-4">
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    },
                    maxLength: {
                      value: 50,
                      message: "Name must be less than 50 characters"
                    }
                  }}
                  render={({ field }) => (
                    <Input
                      label="Name"
                      {...field}
                      errorMessage={errors.name?.message}
                      isInvalid={!!errors.name}
                    />
                  )}
                />
                <Controller
                  name="age"
                  control={control}
                  rules={{
                    required: "Age is required",
                    validate: {
                      isNumber: (value) => !isNaN(Number(value)) || "Age must be a number",
                      min: (value) => Number(value) >= 1 || "Age must be at least 1",
                      max: (value) => Number(value) <= 120 || "Age must be less than 120"
                    }
                  }}
                  render={({ field }) => (
                    <Input
                      label="Age"
                      type="number"
                      {...field}
                      errorMessage={errors.age?.message}
                      isInvalid={!!errors.age}
                    />
                  )}
                />
                <Controller
                  name="gender"
                  control={control}
                  rules={{
                    required: "Please select a gender"
                  }}
                  render={({ field }) => (
                    <Select
                      label="Gender"
                      {...field}
                      errorMessage={errors.gender?.message}
                      isInvalid={!!errors.gender}
                    >
                      <SelectItem key="male">Male</SelectItem>
                      <SelectItem key="female">Female</SelectItem>
                      <SelectItem key="other">Other</SelectItem>
                    </Select>
                  )}
                />
                <Controller
                  name="phoneNo"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: "Please enter a valid phone number"
                    }
                  }}
                  render={({ field }) => (
                    <Input
                      label="Phone Number"
                      {...field}
                      errorMessage={errors.phoneNo?.message}
                      isInvalid={!!errors.phoneNo}
                    />
                  )}
                />
                <Controller
                  name="profilePic"
                  control={control}
                  rules={{
                    required: "Profile picture URL is required",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Please enter a valid URL"
                    }
                  }}
                  render={({ field }) => (
                    <Input
                      label="Profile Picture URL"
                      {...field}
                      errorMessage={errors.profilePic?.message}
                      isInvalid={!!errors.profilePic}
                    />
                  )}
                />
              </div>
            ) : (
              <div className="space-y-3">
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => (
                    <div className="flex gap-2">
                      <span className="font-semibold">Age:</span>
                      <span>{field.value}</span>
                    </div>
                  )}
                />
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <div className="flex gap-2">
                      <span className="font-semibold">Gender:</span>
                      <span className="capitalize">{field.value}</span>
                    </div>
                  )}
                />
                <Controller
                  name="phoneNo"
                  control={control}
                  render={({ field }) => (
                    <div className="flex gap-2">
                      <span className="font-semibold">Phone:</span>
                      <span>{field.value}</span>
                    </div>
                  )}
                />
              </div>
            )}
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className="text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

