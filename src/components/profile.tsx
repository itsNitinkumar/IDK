'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import ProfileForm from './profile-form';
import { IconCamera } from '@tabler/icons-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      <div className="relative h-64 bg-gradient-to-r from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        
        <div className="container mx-auto px-4 h-full flex items-end pb-20">
          <div className="flex items-end space-x-6">
            <div className="relative group">
              <div className="w-40 h-40 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-white">
                <Image
                  src="/images/profile.jpg"
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
            <div className="mb-4 text-white">
              <h1 className="text-3xl font-bold mb-2">Nitin Kumar</h1>
              <p className="text-primary-foreground/90">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">Profile Settings</h2>
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