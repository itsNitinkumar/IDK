'use client';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { FlipWords } from "./ui/flip-words";
import Image from 'next/image';
import LoginFormDemo from './login-form-demo';

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white relative">
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 w-[600px] h-[500px] ">
          <Image 
            src="/welcome-back.svg" 
            alt="Welcome Back" 
            width={500} 
            height={500}
            className="w-full h-full object-contain"
            priority
            style={{ paddingRight: '100px' }}
          />
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <Image 
          src="/loginbg.svg" 
          alt="" 
          width={700} 
          height={700} 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50" 
        />
        <Card className="w-[400px] relative z-20 border-primary/10">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-primary-dark">
              <FlipWords 
                words={[
                  "Welcome Back",
                  "Hello Again",
                  "Nice to See You",
                  "Sign In",
                  "Let's Continue"
                ]} 
                className="inline-block"
              />
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              New here? <Link className="text-primary hover:text-primary-dark hover:underline transition-colors" href="/signup">Create Account</Link>
            </p>

            <LoginFormDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
