import { ProfileData } from '@/app/types/definitions';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const HandleSubmitProfile = async (data: ProfileData) => {
  try {
    const response = await axios.post('/api/profiles', data);
    console.log(response);
    toast.success('Profile created successfully');
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error('Error creating profile');
    }
  }
};
