import { sql } from './utils/query';

async function getData() {
  const response = await sql`SELECT version()`;
  console.log(response);
  return response;
}

const HomePage = async () => {
  const data = await getData();
  console.log(data);
  return <div></div>;
};
export default HomePage;
