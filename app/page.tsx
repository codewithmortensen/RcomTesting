import EmployeeStatusBadge from './components/EmployeeStatusBadge';
import RoleStatusBadge from './components/RoleStatusBadge';

const HomePage = () => {
  return (
    <div>
      <RoleStatusBadge role='EMPLOYEE' />
      <RoleStatusBadge role='MANAGER' />
      <RoleStatusBadge role='SUPERVISOR' />
      <RoleStatusBadge role='EXECUTIVE' />
    </div>
  );
};
export default HomePage;
