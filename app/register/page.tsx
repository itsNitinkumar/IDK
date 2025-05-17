"use client";

import React, { FormEvent, useState } from "react";
import { Form, Input, Select, SelectItem, Checkbox, Button, Link } from "@heroui/react";

// Define interfaces for form data and errors
interface FormData {
  name: string;
  email: string;
  password: string;
  country: string;
  terms?: string;
}

// Update FormErrors to include an index signature for compatibility with ValidationErrors
interface FormErrors {
  [key: string]: string;
  name: string;
  email: string;
  password: string;
  country: string;
  terms: string;
}

const App: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    country: "",
    terms: ""
  });

  // Real-time password validation
  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as unknown as FormData;

    // Custom validation checks
    const newErrors: FormErrors = {
      name: "",
      email: "",
      password: "",
      country: "",
      terms: ""
    };

    // Password validation
    const passwordError = getPasswordError(data.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors({ ...errors, ...newErrors });
      return;
    }

    if (data.terms !== "true") {
      setErrors({ ...errors, terms: "Please accept the terms" });
      return;
    }

    // Clear errors and submit
    setErrors({
      name: "",
      email: "",
      password: "",
      country: "",
      terms: ""
    });
    setSubmitted(data);
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={({ validationDetails }: { validationDetails: ValidityState }) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }
            return errors.name;
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }: { validationDetails: ValidityState }) => {
            if (validationDetails.valueMissing) {
              return "Please enter your email";
            }
            if (validationDetails.typeMismatch) {
              return "Please enter a valid email address";
            }
            return undefined;
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          errorMessage={getPasswordError(password)}
          isInvalid={getPasswordError(password) !== null}
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onValueChange={(value: string) => setPassword(value)}
        />

        <Checkbox
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() =>
            setErrors((prev: FormErrors) => ({ ...prev, terms: "" }))
          }
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
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

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
};

export default App;