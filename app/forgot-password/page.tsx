"use client";

import { Form, Input, Button } from "@heroui/react";
import { FormEvent, useState } from "react";

interface FormData {
    email: string;
}

interface FormErrors {
    [key: string]: string;
    email: string;
}

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({
        email: "",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData) as unknown as FormData;
        
        const newErrors: FormErrors = {
            email: "",
        };
        
        if (!data.email) {
            newErrors.email = "Email is required";
            setErrors(newErrors);
            return;
        }
// api call
        setSubmitted(true);
        setErrors({ email: "" });
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center space-y-4">
                <h2 className="text-xl font-semibold">Check Your Email</h2>
                <p className="text-center text-default-600">
                    If an account exists for {email}, you will receive password reset instructions.
                </p>
            </div>
        );
    }

    return (
        <Form
            className="w-full justify-center items-center space-y-4"
            validationErrors={errors}
            onSubmit={onSubmit}
        >
            <div className="flex flex-col gap-4 max-w-md">
                <h2 className="text-xl font-semibold">Reset Your Password</h2>
                
                <Input
                    isRequired
                    errorMessage={({ validationDetails }: { validationDetails: ValidityState }) => {
                        if (validationDetails.valueMissing) {
                            return "Please enter your email";
                        }
                        if (validationDetails.typeMismatch) {
                            return "Please enter a valid email address";
                        }
                        return errors.email;
                    }}
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onValueChange={(value: string) => setEmail(value)}
                />
                <div className="flex gap-4">
                    <Button className="w-full" color="primary" type="submit">
                        submit
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default ForgotPassword;