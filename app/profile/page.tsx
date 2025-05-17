'use client';
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
  Select,
  SelectItem
} from "@heroui/react";

interface Profile {
  name: string;
  age: string;
  gender: string;
  phoneNo: string;
  profilePic: string;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "Zoey Lang",
    age: "25",
    gender: "female",
    phoneNo: "+1234567890",
    profilePic: "https://heroui.com/avatars/avatar-1.png"
  });

  const handleInputChange = (key: keyof Profile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save the profile to your backend
    setIsEditing(false);
  };

  return (
    <div className="max-w-[600px] mx-auto p-4">
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-3">
          <div className="flex justify-between w-full">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="lg"
                src={profile.profilePic}
              />
              {!isEditing ? (
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-large font-semibold leading-none text-default-600">{profile.name}</h4>
                  <h5 className="text-small tracking-tight text-default-400">@{profile.name.toLowerCase().replace(' ', '')}</h5>
                </div>
              ) : null}
            </div>
            <Button
              color="primary"
              radius="full"
              size="sm"
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? "Save" : "Edit Profile"}
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0">
          {isEditing ? (
            <div className="flex flex-col gap-4">
              <Input
                label="Name"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your name"
              />
              <Input
                label="Age"
                type="number"
                value={profile.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="Enter your age"
              />
              <Select
                label="Gender"
                value={profile.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
              >
                <SelectItem key="male">Male</SelectItem>
                <SelectItem key="female">Female</SelectItem>
                <SelectItem key="other">Other</SelectItem>
              </Select>
              <Input
                label="Phone Number"
                value={profile.phoneNo}
                onChange={(e) => handleInputChange('phoneNo', e.target.value)}
                placeholder="Enter your phone number"
              />
              <Input
                label="Profile Picture URL"
                value={profile.profilePic}
                onChange={(e) => handleInputChange('profilePic', e.target.value)}
                placeholder="Enter profile picture URL"
              />
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="font-semibold">Age:</span>
                <span>{profile.age}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Gender:</span>
                <span className="capitalize">{profile.gender}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Phone:</span>
                <span>{profile.phoneNo}</span>
              </div>
            </div>
          )}
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className="text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

