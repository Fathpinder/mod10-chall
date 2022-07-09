const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
   
});

test('sets employee name', () => {
    const employee = new Employee('Mark');

    expect(employee.name).toBe('Mark');
   
});

test('sets employee ID', () => {
    const employee = new Employee('Mark', 1);

    expect(employee.id).toBe(1);
   
});

test('sets employee email', () => {
    const employee = new Employee('Mark', 1, 'm@gmail.com');

    expect(employee.email).toBe('m@gmail.com');
   
});

test('tests getRole method', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});
// test('gets employee name', () => {
//     const employee = new employee();
// })

// test('creates random employee object', () => {
//     const employee = new employee();

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.value).toBeGreaterThan(0);
//     expect(employee.value).toEqual(expect.any(Number));
// });