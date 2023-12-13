'use client';

import { EmployeeData } from '@/app/types/definitions';
import { toast } from '@/components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

type ProfileProps = {
  profile_id: number;
  full_name: string;
};

export const useSubmitEmployee = async (
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

export const useProfiles = () => {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: () =>
      axios.get<ProfileProps[]>('/api/profiles').then((res) => res.data),
  });
};
