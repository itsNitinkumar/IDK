// "use client";

// import React, { FormEvent, useState } from "react";
// import { Form, Input, Button } from "@heroui/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { resetPassword } from "../actions/auth";

// const ResetPassword: React.FC = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");
  
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string>("");
//   const [password, setPassword] = useState("");

//   const getPasswordError = (value: string): string | null => {
//     if (value.length < 4) {
//       return "Password must be 4 characters or more";
//     }
//     if ((value.match(/[A-Z]/g) || []).length < 1) {
//       return "Password needs at least 1 uppercase letter";
//     }
//     if ((value.match(/[^a-z]/gi) || []).length < 1) {
//       return "Password needs at least 1 symbol";
//     }
//     return null;
//   };

//   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     const passwordError = getPasswordError(password);
//     if (passwordError) {
//       setError(passwordError);
//       return;
//     }

//     if (!token) {
//       setError("Invalid or expired reset link");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       const result = await resetPassword(token, password);
//       if (result.success) {
//         router.push("/login?reset=success");
//       } else {
//         setError(result.error || "Failed to reset password");
//       }
//     } catch (error) {
//       setError("An unexpected error occurred");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!token) {
//     return (
//       <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Invalid Reset Link</h2>
//         <p className="text-center mb-4">
//           This password reset link is invalid or has expired. Please request a new one.
//         </p>
//         <div className="flex justify-center">
//           <Button
//             color="primary"
//             onClick={() => router.push("/forgot-password")}
//           >
//             Request New Reset Link
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-6">Reset Your Password</h2>
//       <Form onSubmit={onSubmit} className="space-y-4">
//         {error && (
//           <div className="text-danger text-small bg-danger-50 p-2 rounded">
//             {error}
//           </div>
//         )}
        
//         <Input
//           isRequired
//           type="password"
//           label="New Password"
//           name="password"
//           placeholder="Enter your new password"
//           labelPlacement="outside"
//           value={password}
//           onValueChange={setPassword}
//           errorMessage={getPasswordError(password)}
//         />

//         <Button
//           type="submit"
//           color="primary"
//           className="w-full"
//           isLoading={isLoading}
//           disabled={isLoading}
//         >
//           {isLoading ? "Resetting..." : "Reset Password"}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ResetPassword; 