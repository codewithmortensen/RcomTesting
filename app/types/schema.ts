import { z } from 'zod';

export const datePickerSchema = z.object({
  range: z.object({
    to: z.date({ required_error: 'start date is required' }),
    from: z.date({ required_error: 'end date is required' }),
  }),
});

export const profileSchema = z.object({
  profileId: z.number({ required_error: 'profile id is required' }),
  firstName: z
    .string()
    .min(3, { message: 'first name should be atleast 3 characters' })
    .max(50, { message: 'first name should be less than 50 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'last name should be atleast 3 characters' })
    .max(50, { message: 'last name should be less than 50 characters' }),
  birthDate: z
    .date()
    .min(new Date('1980-01-01'), { message: 'Enter a valid birthdate' })
    .max(new Date('2003-01-01'), { message: 'Enter a valid birthdate' }),
  gender: z.enum(['FEMALE', 'MALE', 'OTHER'], {
    errorMap: () => {
      return { message: 'Please select a gender' };
    },
  }),
  phone: z.string().min(8, { message: 'phone number is not valid' }),
  email: z.string().min(10, { message: 'This is not a valid email' }),
});

export const employeeIdSchema = z.object({
  employee_id: z.number({ required_error: 'employee id is required' }),
});
