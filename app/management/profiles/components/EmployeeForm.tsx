'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { cn } from '@/app/components/utils';
import { EmployeeData } from '@/app/types/definitions';
import { employeeSchema } from '@/app/types/schema';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { roles, statues } from '../../employees/create/components/utils';

const defaultValues: Partial<EmployeeData> = {};

type ProfileProps = {
  profile_id: number;
  full_name: string;
};

export function EmployeeForm() {
  const { data: profiles } = useQuery({
    queryKey: ['profiles'],
    queryFn: () =>
      axios.get<ProfileProps[]>('/api/profiles').then((res) => res.data),
  });

  const form = useForm<EmployeeData>({
    resolver: zodResolver(employeeSchema),
    defaultValues,
  });

  function onSubmit(data: EmployeeData) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div>
          <FormField
            control={form.control}
            name='profile_id'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        role='combobox'
                        className={cn(
                          'w-[300px] justify-between',
                          !field.value && 'text-muted-foreground'
                        )}>
                        {field.value
                          ? profiles?.find(
                              (profile) =>
                                String(profile.profile_id) === field.value
                            )?.full_name
                          : 'Select Profile'}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-[300px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search Profiles...' />
                      <CommandEmpty>No Profiles found.</CommandEmpty>
                      <CommandGroup>
                        {profiles?.map((profile) => (
                          <CommandItem
                            value={profile.full_name}
                            key={profile.profile_id}
                            onSelect={() => {
                              form.setValue(
                                'profile_id',
                                String(profile.profile_id)
                              );
                            }}>
                            <CheckIcon
                              className={cn(
                                'mr-2 h-4 w-4',
                                String(profile.profile_id) === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {profile.full_name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='job_title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Job Title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='department'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Department' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <FormField
            name='role'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder='Role' />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            name='status'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder='Status' />
                    </SelectTrigger>
                    <SelectContent>
                      {statues.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='salary'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs'>Salary</FormLabel>
                <FormControl>
                  <Input placeholder='Salary' {...field} type='number' />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='hire_date'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs'>Hire Date</FormLabel>
                <FormControl>
                  <Input placeholder='Hire Date' {...field} type='date' />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='start_shift'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs'>Start Shift</FormLabel>
                <FormControl>
                  <Input placeholder='Salary' {...field} type='time' />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='end_shift'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs'>End Shift</FormLabel>
                <FormControl>
                  <Input {...field} type='time' />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit' variant='outline'>
          Create Employee
        </Button>
      </form>
    </Form>
  );
}
