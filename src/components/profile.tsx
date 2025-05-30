'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import ProfileForm from './profile-form';
import { IconCamera } from '@tabler/icons-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      <Image 
        src="/profilebg.svg" 
        alt="Background" 
        fill 
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0" 
        priority
      />

      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-6 mb-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <IconCamera className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Nitin Kumar</h1>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-none shadow-lg backdrop-blur-md bg-white/80">
            <CardContent className="p-6">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Update your profile information
                </p>
              </div>

              <ProfileForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
