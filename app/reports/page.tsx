'use client';

import { useAttendanceReport } from './hook/useAttendanceReport';

const HomePage = () => {
  const { data } = useAttendanceReport();
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.last_name}>{item.first_name}</li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;
