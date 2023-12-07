import RoleStatusBadge from '@/app/components/RoleStatusBadge';
import { getEmployee } from '../utils';
import EmployeeStatusBadge from '@/app/components/EmployeeStatusBadge';
import dayjs from 'dayjs';

import { Source_Code_Pro } from 'next/font/google';
import { cn } from '@/lib/utils';

const code = Source_Code_Pro({ subsets: ['latin'] });

interface EmployeeDetailPageProps {
  params: { employee_id: string };
}

const genderMap = {
  FEMALE: 'Female',
  MALE: 'Male',
};

const headerStyle = cn(
  cn(
    'text-lg font-bold py-3 tracking-normal sm:text-3xl xl:text-4xl/none bg-clip-text text-center text-transparent bg-gradient-to-r from-gray-300 to-gray-500',
    code.className
  )
);

const EmployeeDetailPage = async ({
  params: { employee_id },
}: EmployeeDetailPageProps) => {
  if (!parseInt(employee_id)) return 'Invalid employee id';
  const employee = await getEmployee(parseInt(employee_id));

  const profileInfo = [
    { label: 'Employee ID', value: employee?.employee_id },
    {
      label: 'Full name',
      value: `${employee?.first_name} ${employee?.last_name}`,
    },
    {
      label: 'Birth Date',
      value: `${dayjs(employee?.birth_date).format('MMMM DD, YYYY')}`,
    },
    {
      label: 'Gender',
      value:
        employee?.gender === 'FEMALE'
          ? 'Female'
          : employee?.gender === 'MALE'
          ? 'Male'
          : 'Other',
    },
    { label: 'Phone Number', value: employee?.phone_number },
    { label: 'Email', value: employee?.email },
  ];

  // Array of objects for work info
  const workInfo = [
    { label: 'Job Title', value: employee?.job_title },
    {
      label: 'Hire Date',
      value: `${dayjs(employee?.hire_date).format('MMMM DD, YYYY')}`,
    },
    { label: 'Salary', value: employee?.salary },
    { label: 'Department', value: employee?.department },
    {
      label: 'Employee Status',
      value: <EmployeeStatusBadge status={employee?.status!} />,
    },
    {
      label: 'Employee Role',
      value: <RoleStatusBadge role={employee?.role!} />,
    },
    // Add more work info here
  ];
  return (
    <div className='mx-5 md:mx-20 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-[5rem]'>
        <div className='overflow-hidden sm:rounded-lg'>
          <div className='px-4 py-5 sm:px-6'>
            <h1 className={headerStyle}>Employee Profile Info</h1>
          </div>
          <div className='border-t '>
            <dl>
              {profileInfo.map((info, index) => (
                <div
                  key={index}
                  className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
                  <dt className='text-sm font-medium'>{info.label}</dt>
                  <dd className='mt-1 text-xs font-medium text-gray-700 sm:mt-0 sm:col-span-2'>
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className='overflow-hidden sm:rounded-lg'>
          <div className='px-4 py-5 sm:px-6'>
            <h1 className={headerStyle}>Employee Work Info</h1>
          </div>
          <div className='border-t '>
            <dl>
              {workInfo.map((info, index) => (
                <div
                  key={index}
                  className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
                  <dt className='text-sm font-medium'>{info.label}</dt>
                  <dd className='mt-1 text-xs font-medium text-gray-700 sm:mt-0 sm:col-span-2'>
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
