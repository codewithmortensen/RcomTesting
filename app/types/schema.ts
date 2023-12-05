import { z } from 'zod';

export const datePickerSchema = z.object({
  range: z.object({
    to: z.date({ required_error: 'start date is required' }),
    from: z.date({ required_error: 'end date is required' }),
  }),
});
