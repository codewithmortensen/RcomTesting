'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { ResponsiveBar } from '@nivo/bar';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { ClockIcon, MinusCircleIcon, UsersIcon } from 'lucide-react';

export default function Component() {
  return (
    <div className='flex flex-col w-full '>
      <main className='flex min-h-[calc(80vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 pb-0'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Total Attendance
              </CardTitle>
              <UsersIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>3456</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +10.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Absences</CardTitle>
              <MinusCircleIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>110</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +2.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Late Arrivals
              </CardTitle>
              <ClockIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>89</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                -5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Early Departures
              </CardTitle>
              <ClockIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>120</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +1.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Card>
            <CardHeader className='pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Attendance Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className='w-full h-[300px]' />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Employee</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time In</TableHead>
                    <TableHead>Time Out</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>John Doe</TableCell>
                    <TableCell>Dec 12, 2023</TableCell>
                    <TableCell>08:00 AM</TableCell>
                    <TableCell>05:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Jane Smith</TableCell>
                    <TableCell>Dec 12, 2023</TableCell>
                    <TableCell>08:30 AM</TableCell>
                    <TableCell>05:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>David Johnson</TableCell>
                    <TableCell>Dec 12, 2023</TableCell>
                    <TableCell>09:00 AM</TableCell>
                    <TableCell>05:00 PM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: 'A',
            data: 111,
          },
          {
            name: 'B',
            data: 157,
          },
          {
            name: 'C',
            data: 129,
          },
          {
            name: 'D',
            data: 187,
          },
          {
            name: 'E',
            data: 119,
          },
          {
            name: 'F',
            data: 22,
          },
          {
            name: 'G',
            data: 101,
          },
          {
            name: 'H',
            data: 83,
          },
        ]}
        keys={['data']}
        indexBy='name'
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Name',
          legendPosition: 'middle',
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number',
          legendPosition: 'middle',
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: '12px',
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role='application'
        ariaLabel='A bar chart showing data'
      />
    </div>
  );
}
