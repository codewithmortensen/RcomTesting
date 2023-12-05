const faker = require('faker');
const fs = require('fs');

const mockEmployeeTables = Array.from({ length: 15 }, (_, i) => ({
  employee_id: i + 1,
  profile_id: i + 1,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  birth_date: faker.date.past(50, new Date(2000, 0, 1)),
  gender: faker.random.arrayElement(['MALE', 'FEMALE']),
  phone_number: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    postal_code: faker.address.zipCode(),
  },
  hire_date: faker.date.past(20, new Date(2022, 0, 1)),
  salary: faker.random.number({ min: 30000, max: 100000 }),
  department: faker.commerce.department(),
  job_title: faker.name.jobTitle(),
  status: faker.random.arrayElement(['ACTIVE', 'INACTIVE']),
  start_shift: faker.date.future(0.1, new Date(2022, 0, 1)),
  end_shift: faker.date.future(0.1, new Date(2022, 0, 1, 9)),
  reports_to: i > 0 ? i : undefined,
  role: faker.random.arrayElement([
    'EMPLOYEE',
    'MANAGER',
    'SUPERVISOR',
    'EXECUTIVE',
  ]),
}));

module.exports = {
  mockEmployeeTables,
};

const mockEmployeeTables = Array.from({ length: 15 }, (_, i) => ({
  // ... your existing code
}));

fs.writeFile(
  'mockEmployeeTables.json',
  JSON.stringify(mockEmployeeTables, null, 2),
  (err) => {
    if (err) {
      console.error('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  }
);
