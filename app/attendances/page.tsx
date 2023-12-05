import { attendances } from '../data/attendances';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

const HomePage = () => {
  return (
    <div className='mx-[5rem] my-10'>
      <DataTable columns={columns} data={attendances} />
    </div>
  );
};
export default HomePage;
