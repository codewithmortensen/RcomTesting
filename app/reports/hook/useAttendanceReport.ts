'use client';

import { AttendanceReport } from '@/app/types/definitions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAttendanceReport = () => {
  return useQuery({
    queryKey: ['attendance-report'],
    queryFn: () =>
      axios.get<AttendanceReport[]>('/api/reports').then((res) => res.data),
    staleTime: 1000 * 60 * 60,
  });
};
