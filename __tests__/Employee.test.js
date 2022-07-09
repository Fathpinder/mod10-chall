const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new employee('Mark', '1', 'm@gmail');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('m@gmail');
    // expect(employee.value).toEqual(expect.any(Number));
});

test('gets employee name', () => {
    const employee = new employee();
})

// test('creates random employee object', () => {
//     const employee = new employee();

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.value).toBeGreaterThan(0);
//     expect(employee.value).toEqual(expect.any(Number));
// });