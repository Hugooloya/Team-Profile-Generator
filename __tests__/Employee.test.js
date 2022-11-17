const Employee = require('../lib/Employee');
const employee = new Employee('Oliver', '007', 'oliver@email.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Oliver');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('oliver@email.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Oliver');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('007');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('oliver@email.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});