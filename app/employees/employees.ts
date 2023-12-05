import { EmployeeProfile } from '../types/definitions';
import { sql } from '../utils/query';

export const getEmployees = async () => {
  try {
    const employees: EmployeeProfile[] = await sql`
		SELECT * 
		FROM profiletable
		JOIN employeetable USING (profile_id) `;
    return employees;
  } catch (error) {
    throw new Error('Error fetching employees');
  }
};
