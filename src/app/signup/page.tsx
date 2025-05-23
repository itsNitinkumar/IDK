import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-emerald-100 to-teal-100">
      <div className="flex flex-col justify-center items-center text-center p-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">Welcome to Hilfbox!</h1>
          <p className="text-gray-600 max-w-md">
            We are a community, together helping thousands of people out there who are struggling
          </p>
          <div className="flex gap-4 mt-6">
            {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1 }} className="rounded-full overflow-hidden shadow-lg w-16 h-16">
                <Image src={src} alt={`community-${idx}`} width={64} height={64} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center p-10">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
            <p className="text-sm text-gray-500 mb-6">
              Already have an account? <a className="text-emerald-600 hover:underline" href="#">Sign In</a>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input 
                placeholder="Name" 
                {...register("name", { required: true })} 
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

              <Input 
                placeholder="Email" 
                type="email" 
                {...register("email", { required: true })} 
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

              <div className="relative">
                <Input 
                  placeholder="Password" 
                  type={showPassword ? "text" : "password"} 
                  {...register("password", { required: true })} 
                />
                <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Sign Up
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">Or sign up with</p>
              <div className="flex justify-center gap-4">
                {["google", "twitter", "facebook"].map((provider, idx) => (
                  <Button key={idx} variant="outline" size="icon">
                    <Image src={`/${provider}.svg`} alt={provider} width={20} height={20} />
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 