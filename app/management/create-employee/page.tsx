import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateProfilePage from './components/ProfileForm';

import { EmployeeForm } from './components/EmployeeForm';
const EmloyeeProfilePage = () => {
  return (
    <div>
      <Tabs defaultValue='profile' className='mx-10'>
        <TabsList className='mb-5'>
          <TabsTrigger
            value='profile'
            className='text-xs font-medium tracking-wide'>
            Profile Info
          </TabsTrigger>
          <TabsTrigger
            value='work'
            className='text-xs font-medium tracking-wide'>
            Work Info
          </TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          <CreateProfilePage />
        </TabsContent>
        <TabsContent value='work'>
          <EmployeeForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default EmloyeeProfilePage;