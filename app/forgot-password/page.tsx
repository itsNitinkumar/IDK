"use client";

import { Form, Input, Button } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface FormInputs {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<FormInputs>();

    const email = watch("email");
    const [submitted, setSubmitted] = useState(false);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        //  password reset logic 
        console.log('Reset password for:', data.email);
        setSubmitted(true);
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
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-4 max-w-md">
                <h2 className="text-xl font-semibold">Reset Your Password</h2>
                
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
                <div className="flex gap-4">
                    <Button 
                        className="w-full" 
                        color="primary" 
                        type="submit"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Reset Password'}
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default ForgotPassword;