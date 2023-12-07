'use client';
import TextGradient from '@/app/components/TextGradient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import dynamic from 'next/dynamic';
const TimeCard = dynamic(() => import('./TimeCard'), { ssr: false });

export default function Component() {
  return (
    <section className='w-full relative'>
      <div className='container px-4 md:px-6 flex justify-center items-center h-screen'>
        <div className='absolute top-5 right-20'>
          <TimeCard />
        </div>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2 mb-10'>
            <TextGradient classname='text-4xl lg:text-8xl font-black text-center'>
              Employee Attendance
            </TextGradient>
          </div>

          <div className='w-full max-w-sm space-y-2'>
            <form className='flex space-x-2'>
              <Input
                className='max-w-lg flex-1'
                placeholder='Scanner your ID or Add it manually'
                type='number'
              />
              <Button type='submit'>Check In</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
