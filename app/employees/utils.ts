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
export const getEmployee = async (
  employee_id: number
): Promise<EmployeeProfile | null> => {
  try {
    const employees: EmployeeProfile[] = await sql`
        SELECT * 
        FROM profiletable
        JOIN employeetable USING (profile_id)
    WHERE employee_id = ${employee_id} `;
    return employees[0] || null;
  } catch (error: unknown) {
    if (error instanceof Error)
      throw new Error(`Error fetching employee: ${error.message}`);
    return null;
  }
};
