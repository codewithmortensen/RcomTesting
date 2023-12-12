import postgres from 'postgres';

async function getData() {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

  const response = await sql`SELECT version()`;
  console.log(response);
  return response;
}

export default async function Page() {
  const data = await getData();
}

export function generateId() {
  return Math.floor(100000 + Math.random() * 900000);
}
