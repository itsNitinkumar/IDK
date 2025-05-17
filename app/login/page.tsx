'use client';

import { Form, Input, Button } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface FormInputs {
    email: string;
    password: string;
}

const App: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        console.log('Form submitted:', data);
        //  login logic 
    };

    return (
        <Form
            className="w-full justify-center items-center space-y-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-4 max-w-md">
                <Input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email"
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
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    isRequired
                    label="Password"
                    labelPlacement="outside"
                    placeholder="Enter your password"
                    type="password"
                    errorMessage={errors.password?.message}
                />
                <div className="flex justify-end">
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                        Forgot password?
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Button 
                        className="w-full" 
                        color="primary" 
                        type="submit"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default App; 