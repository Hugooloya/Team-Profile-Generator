const Intern = require('../lib/Intern');
const intern = new Intern('Oliver', '007', 'oliver@email.com', 'Northwestern');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Oliver');
    expect(intern.id).toBe('007');
    expect(intern.email).toBe('oliver@email.com');
    expect(intern.school).toBe('Northwestern');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Oliver');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('007');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('oliver@email.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Northwestern');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});