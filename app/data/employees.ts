import { EmployeeTable } from '../types/definitions';

export const mockEmployeeTables: EmployeeTable[] = Array.from(
  { length: 15 },
  (_, i) => ({
    employee_id: i + 1,
    profile_id: i + 1,
    first_name: `John${i + 1}`,
    last_name: `Doe${i + 1}`,
    birth_date: new Date(1980, 1, 1),
    gender: 'MALE',
    phone_number: `123-456-78${i < 10 ? '0' + i : i}`,
    email: `john.doe${i + 1}@example.com`,
    address: {
      street: `${i + 1} Main St`,
      city: 'Anytown',
      state: 'Anystate',
      country: 'USA',
      postal_code: `1234${i}`,
    },
    hire_date: new Date(2020, 1, 1),
    salary: 50000,
    department: 'Engineering',
    job_title: 'Software Engineer',
    status: 'ACTIVE',
    start_shift: new Date(2022, 1, 1, 9, 0, 0),
    end_shift: new Date(2022, 1, 1, 17, 0, 0),
    reports_to: i > 0 ? i : undefined,
    role: 'EMPLOYEE',
  })
);
