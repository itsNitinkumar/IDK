'use client';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { FlipWords } from "./ui/flip-words";

import Image from 'next/image';

import ForgotPasswordFormDemo from './forgot-password-form-demo';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white relative">
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 w-[600px] h-[500px] ">
          <Image 
            src="/forgot-password.svg" 
            alt="Forgot Password" 
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
          src="/resetbg.svg" 
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
                  "Reset Password",
                  "Forgot Password?",
                  "No Worries",
                  "We'll Help",
                  "Get Access"
                ]} 
                className="inline-block"
              />
            </h2>

            <ForgotPasswordFormDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 