import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { getEmployees } from './utils';

const EmployeePage = async () => {
  const employees = await getEmployees();
  return (
    <div className='mx-[5rem] my-10'>
      <DataTable data={employees} columns={columns} />
    </div>
  );
};
export default EmployeePage;
