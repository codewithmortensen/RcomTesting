export type Status =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'ON_LEAVE'
  | 'SUSPENDED'
  | 'TERMINATED';

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type Address = {
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
};

export type Profile = {
  profile_id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
  gender: Gender;
  phone_number: string;
  email: string;
  address: Address; // Added address field
};

export type Employee = {
  employee_id: number;
  profile: Profile; // Changed from profile_id to Profile type
  hire_date: Date;
  salary: number;
  department: string;
  job_title: string;
  status: Status;
  start_shift: Date;
  end_shift: Date;
  reports_to?: number; // Optional field for supervisor's employee_id
};
