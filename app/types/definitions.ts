import { z } from 'zod';
import { datePickerSchema } from './schema';

export type Role = 'EMPLOYEE' | 'MANAGER' | 'SUPERVISOR' | 'EXECUTIVE';

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type CheckOutStatus = 'ON_TIME' | 'EARLY';

export type CheckInStatus = 'ON_TIME' | 'LATE';

export type EmployeeStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

export type WorkDayStatus = 'ABSENT' | 'PRESENT';

export type Address = {
  address_id: number;
  street: string;
  city: string;
};

export type ProfileTable = {
  profile_id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: Gender;
  phone_number: string;
  email: string;
  address_id: number;
};

export type EmployeeTable = {
  employee_id: number;
  profile_id: number;
  hire_date: Date;
  salary: number;
  department: string;
  job_title: string;
  status: EmployeeStatus;
  start_shift: Date;
  end_shift: Date;
  reports_to?: number;
  role: Role;
};

export type AttendanceTable = {
  attendance_id: number;
  employee_id: number;
  attendance_date: string;
  check_in_time: string;
  check_out_time: string;
  check_in_status: CheckInStatus;
  check_out_status: CheckOutStatus;
  work_day_status: WorkDayStatus;
};

export type EmployeeAttendance = {
  employee_id: number;
  first_name: string;
  last_name: string;
  attendance_date: string;
  check_in_time: string;
  check_out_time: string;
  check_in_status: CheckInStatus;
  check_out_status: CheckOutStatus;
  work_day_status: WorkDayStatus;
};

export type EmployeeProfile = {
  employee_id: number;
  profile_id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: Gender;
  phone_number: string;
  email: string;
  address_id: number;
  hire_date: string;
  salary: number;
  department: string;
  job_title: string;
  status: EmployeeStatus;
  start_shift: string;
  end_shift: string;
  reports_to?: number;
};

export type AttendanceReport = {
  employee_id: number;
  first_name: string;
  last_name: string;
  on_time_check_in_count: number;
  late_check_in_count: number;
  on_time_check_out_count: number;
  early_check_out_count: number;
  absent_count: number;
  present_count: number;
};

export type DatePickerData = z.infer<typeof datePickerSchema>;
