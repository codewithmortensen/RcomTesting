import { mockEmployeeTables } from '../data/employees';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

const EmployeePage = () => {
  return (
    <div className='mx-[5rem] my-10'>
      <DataTable data={mockEmployeeTables} columns={columns} />
    </div>
  );
};
export default EmployeePage;
