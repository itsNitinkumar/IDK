"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Input, Checkbox, Button, Link } from "@heroui/react";

interface FormInputs {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormInputs>();

  const password = watch("password");

  const validatePassword = (value: string): true | string => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }
    return true;
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log('Form submitted:', data);
    // registration logic 
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset()}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          {...register("name", {
            required: "Please enter your name",
            validate: (value) => {
              if (value.length < 2) {
                return "Name must be at least 2 characters";
              }
              return true;
            }
          })}
          isRequired
          label="Name"
          labelPlacement="outside"
          placeholder="Enter your name"
          errorMessage={errors.name?.message}
        />

        <Input
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address"
            }
          })}
          isRequired
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          type="email"
          errorMessage={errors.email?.message}
        />

        <Input
          {...register("password", {
            required: "Please enter your password",
            validate: validatePassword
          })}
          isRequired
          label="Password"
          labelPlacement="outside"
          placeholder="Enter your password"
          type="password"
          errorMessage={errors.password?.message}
        />

        <Checkbox
          {...register("terms", {
            required: "Please accept the terms and conditions"
          })}
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!errors.terms}
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms.message}</span>
        )}

        <div className="flex gap-4">
          <Button 
            className="w-full" 
            color="primary" 
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
        <div className="flex justify-center">
          <Link href="/login" size="sm" color="primary">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default App;