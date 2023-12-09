'use client';

import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { ProfileData } from './types/definitions';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from './types/schema';
function generateProfileId() {
  return Math.floor(100000 + Math.random() * 900000);
}
export default function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileData) => {
    console.log(data);
    console.log(generateProfileId());
  };
  return (
    <div className='max-w-[40rem] mx-auto mt-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Employeee Personal Information
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              These informations will be use to create your employee profile.
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  First name
                </label>
                <div className='mt-2'>
                  <input
                    {...register('firstName')}
                    type='text'
                    name='firstName'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 px-3'
                  />
                  {errors.firstName && (
                    <p className='text-red-600 text-xs font-medium'>
                      {errors.firstName?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Last name
                </label>
                <div className='mt-2'>
                  <input
                    {...register('lastName')}
                    type='text'
                    name='lastName'
                    id='last-name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-3'
                  />
                  {errors.lastName && (
                    <p className='text-red-600 text-xs font-medium'>
                      {errors.lastName?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Phone Number
                </label>
                <div className='mt-2'>
                  <input
                    {...register('phone')}
                    id='phone'
                    name='phone'
                    type='tel'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-3'
                  />
                  {errors.phone && (
                    <p className='text-xs font-medium text-red-600'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='gender'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Gender
                </label>
                <div className='mt-2'>
                  <select
                    {...register('gender')}
                    id='gender'
                    name='gender'
                    autoComplete='employee-gender'
                    className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-insetsm:max-w-xs sm:text-sm sm:leading-6 px-3'>
                    <option value='MALE'>Male</option>
                    <option value='FEMALE'>Female</option>
                    <option value='OTHER'>Other</option>
                  </select>
                  {errors.gender && (
                    <p className='text-red-600 text-xs font-medium'>
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='birthday'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Birth Date
                </label>
                <div className='mt-2'>
                  <input
                    {...register('birthDate', { valueAsDate: true })}
                    id='birthday'
                    name='birthDate'
                    type='date'
                    autoComplete='employee-birthday'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-3'
                  />
                  {errors.birthDate && (
                    <p className='text-xs font-medium text-red-600'>
                      {errors.birthDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='street-address'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Email
                </label>
                <div className='mt-2'>
                  <input
                    {...register('email')}
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-3'
                  />
                  {errors.email && (
                    <p className='text-xs font-medium text-red-600'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Button type='submit' className='my-5'>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
