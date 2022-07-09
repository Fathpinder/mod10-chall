const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
   
});

test('sets manager name', () => {
    const manager = new Manager('Mark');

    expect(manager.name).toBe('Mark');
   
});

test('sets manager ID', () => {
    const manager = new Manager('Mark', 1);

    expect(manager.id).toBe(1);
   
});

test('sets manager email', () => {
    const manager = new Manager('Mark', 1, 'm@gmail.com');

    expect(manager.email).toBe('m@gmail.com');
   
});

test('tests getRole method', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});

test('sets office number', () => {
    const manager = new Manager('Mark', 1, 'm@gmail.com', 2);

    expect(manager.getOfficeNumber()).toBe(2);
});