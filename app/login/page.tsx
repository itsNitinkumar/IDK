'use client';

import { Form, Input, Button } from "@heroui/react";
import { FormEvent, useState } from "react";
import Link from "next/link";

interface FormData {
    email: string;
    password: string;
}

interface FormErrors {
    [key: string]: string;
    email: string;
    password: string;
}       

const App: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<FormErrors>({
        email: "",
        password: "",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData) as unknown as FormData;
        
        const newErrors: FormErrors = {
            email: "",
            password: "",
        };
        
        if (!data.email) {
            newErrors.email = "Email is required";
        }
        
        if (!data.password) {
            newErrors.password = "Password is required";
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors({ ...errors, ...newErrors });
            return;
        }
        
        setErrors({
            email: "",
            password: "",
        });
    };

    return (
        <Form
            className="w-full justify-center items-center space-y-4"
            validationErrors={errors}
            onSubmit={onSubmit}
        >
            <div className="flex flex-col gap-4 max-w-md">
                <Input
                    isRequired
                    errorMessage={({ validationDetails }: { validationDetails: ValidityState }) => {
                        if (validationDetails.valueMissing) {
                            return "Please enter your email";
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
                <Input
                    isRequired
                    errorMessage={({ validationDetails }: { validationDetails: ValidityState }) => {
                        if (validationDetails.valueMissing) {
                            return "Please enter your password";
                        }
                        return errors.password;
                    }}
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onValueChange={(value: string) => setPassword(value)}
                />
                <div className="flex justify-end">
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                        Forgot password?
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Button className="w-full" color="primary" type="submit">Login</Button>
                </div>
            </div>
        </Form>
    );
};

export default App; 