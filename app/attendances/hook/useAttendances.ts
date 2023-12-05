'use client';

import axios from 'axios';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { EmployeeAttendance } from '@/app/types/definitions';

export const useAttendances = () => {
  return useQuery({
    queryKey: ['attendances'],
    queryFn: () =>
      axios
        .get<EmployeeAttendance[]>('/api/attendances')
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 6,
    placeholderData: keepPreviousData,
  });
};
