import EmployeeStatusBadge from './components/EmployeeStatusBadge';

const HomePage = () => {
  return (
    <div>
      <EmployeeStatusBadge status='ACTIVE' />
      <EmployeeStatusBadge status='INACTIVE' />
      <EmployeeStatusBadge status='ON_LEAVE' />
      <EmployeeStatusBadge status='SUSPENDED' />
      <EmployeeStatusBadge status='TERMINATED' />
    </div>
  );
};
export default HomePage;
