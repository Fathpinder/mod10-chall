const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
   
});

test('sets intern name', () => {
    const intern = new Intern('Mark');

    expect(intern.name).toBe('Mark');
   
});

test('sets intern ID', () => {
    const intern = new Intern('Mark', 1);

    expect(intern.id).toBe(1);
   
});

test('sets intern email', () => {
    const intern = new Intern('Mark', 1, 'm@gmail.com');

    expect(intern.email).toBe('m@gmail.com');
   
});

test('tests getRole method', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});

test('tests getSchool method', () => {
    const intern = new Intern('Mark', 1, 'm@gmail.com', 'Wisconsin');

    expect(intern.getSchool()).toBe('Wisconsin');

});