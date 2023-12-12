import { Button } from '@/components/ui/button';
import {
  HomeIcon,
  MessagesSquareIcon,
  SearchIcon,
  UserIcon,
} from 'lucide-react';

export default function TopNav() {
  return (
    <div className='flex justify-around items-center h-16 bg-white dark:bg-gray-900 shadow-md'>
      <Button size='icon' variant='outline'>
        <HomeIcon className='h-6 w-6' />
        <span className='sr-only'>Home</span>
      </Button>
      <Button size='icon' variant='outline'>
        <SearchIcon className='h-6 w-6' />
        <span className='sr-only'>Search</span>
      </Button>
      <Button size='icon' variant='outline'>
        <MessagesSquareIcon className='h-6 w-6' />
        <span className='sr-only'>Messages</span>
      </Button>
      <Button size='icon' variant='outline'>
        <UserIcon className='h-6 w-6' />
        <span className='sr-only'>Profile</span>
      </Button>
    </div>
  );
}
