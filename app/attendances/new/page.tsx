'use client';
import TextGradient from '@/app/components/TextGradient';
import { EmployeeIdData } from '@/app/types/definitions';
import { employeeIdSchema } from '@/app/types/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
const TimeCard = dynamic(() => import('./TimeCard'), { ssr: false });

export default function Component() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeIdData>({
    resolver: zodResolver(employeeIdSchema),
  });
  return (
    <section className='w-full relative'>
      <div className='container px-4 md:px-6 flex justify-center items-center h-screen'>
        <div className='absolute top-5 right-20'>
          <TimeCard />
        </div>
        <div className='flex flex-col items-center space-y-4 '>
          <div className='space-y-2 mb-10'>
            <TextGradient classname='text-4xl lg:text-8xl font-black text-center'>
              Employee Attendance
            </TextGradient>
          </div>

          <div className='w-full max-w-sm space-y-2'>
            <form
              className='flex space-x-2 justify-between'
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}>
              <div>
                <Input
                  className='w-[20rem] flex-2'
                  placeholder='Scan your ID or Add it manually'
                  type='number'
                  {...register('employeeId', { valueAsNumber: true })}
                />
                {errors.employeeId && (
                  <p className='text-xs text-red-600 ml-1 mt-1'>
                    {errors.employeeId.message}
                  </p>
                )}
              </div>
              <Button type='submit'>Check In</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
