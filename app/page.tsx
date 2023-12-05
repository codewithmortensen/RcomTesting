'use client';

import DateRangerPicker from './components/DateRangePicker';

const HomePage = () => {
  return (
    <div>
      <DateRangerPicker onSubmitForm={(range) => console.log(range)} />
    </div>
  );
};
export default HomePage;
