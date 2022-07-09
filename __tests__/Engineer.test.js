const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
   
});

test('sets engineer name', () => {
    const engineer = new Engineer('Mark');

    expect(engineer.name).toBe('Mark');
   
});

test('sets engineer ID', () => {
    const engineer = new Engineer('Mark', 1);

    expect(engineer.id).toBe(1);
   
});

test('sets engineer email', () => {
    const engineer = new Engineer('Mark', 1, 'm@gmail.com');

    expect(engineer.email).toBe('m@gmail.com');
   
});

test('tests getRole method', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});

test('tests getGitHub method', () => {
    const engineer = new Engineer('Mark', 1, 'm@gmail.com', 'Fathpinder');

    expect(engineer.getGitHub()).toBe('Fathpinder');

});