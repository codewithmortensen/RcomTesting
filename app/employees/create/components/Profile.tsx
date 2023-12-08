import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const Profile = () => {
  return (
    <div>
      <form className='space-y-4'>
        <div className='space-y-1'>
          <Label htmlFor='first_name'>First Name</Label>
          <Input id='first_name' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='last_name'>Last Name</Label>
          <Input id='last_name' />
        </div>

        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Select your Gender' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='MALE'>Male</SelectItem>
              <SelectItem value='FEMALE'>Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className=''>
          <label htmlFor='phone_number'>Phone Number</label>
          <div className='flex'>
            <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
              +509
            </span>
            <Input
              type='text'
              name='phone_number'
              id='phone_number'
              className='flex-1 block w-full min-w-0 border border-gray-300 rounded-none rounded-r-md focus:ring-indigo outline:mone focus:border-indigo-0  sm:text-sm'
              placeholder='9123456789'
            />
          </div>
        </div>
        <div className=''>
          <label htmlFor='birth_date'>Birth Date</label>
          <Input type='date' id='birth_date' />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' />
        </div>
      </form>
    </div>
  );
};
export default Profile;
