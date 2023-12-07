import dayjs from 'dayjs';

const HomePage = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Port-au-Prince'
  );

  const data = await response.json();
  const currentDateTime = data.datetime;
  const currentTime = dayjs(currentDateTime).format('HH:mm:ss');
  const currentDate = dayjs(currentDateTime).format('YYYY-MM-DD');
  console.log(currentTime);
  console.log(currentDate);

  return <div>HomePage</div>;
};
export default HomePage;
