'use client';

import { EmployeeData } from '@/app/types/definitions';
import { toast } from '@/components/ui/use-toast';
import axios, { AxiosError } from 'axios';

export const SubmitEmployee = async (
  data: EmployeeData,
  onSuccess: () => void
) => {
  try {
    const response = await axios.post('/api/employees', data);
    toast({
      title: 'Employee Information',
      description: 'Employee information has been saved successfully.',
    });
    onSuccess();
  } catch (error) {
    if (error instanceof AxiosError) toast({ title: error.message });
  }
};
