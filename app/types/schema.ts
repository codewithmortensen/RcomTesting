import { z } from 'zod';

export const datePickerSchema = z.object({
  range: z.object({
    to: z.date({ required_error: 'start date is required' }),
    from: z.date({ required_error: 'end date is required' }),
  }),
});
export const profileSchema = z.object({
  firstName: z
    .string({ required_error: 'first name is required' })
    .min(3, { message: 'first name is Invalid' }),
  lastName: z
    .string({ required_error: 'last name is required' })
    .min(3, { message: 'last name is is Invalid' }),
  birthDate: z
    .date({ required_error: 'birth date is required' })
    .refine((date) => date !== undefined, {
      message: 'birth date is required',
    }),
  gender: z
    .enum(['MALE', 'FEMALE', 'OTHER'])
    .refine((value) => value !== undefined, {
      message: 'Gender is required and must be either MALE, FEMALE, or OTHER',
    }),
  phone: z
    .string({ required_error: 'phone number is required' })
    .min(10, { message: 'phone number is invalid' }),
  email: z
    .string({ required_error: 'email is required' })
    .email({ message: 'email is invalid' }),
});
