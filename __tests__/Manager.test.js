const Manager = require('../lib/Manager');
const manager = new Manager('Oliver', '007', 'oliver@email.com', '111');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Oliver');
    expect(manager.id).toBe('007');
    expect(manager.email).toBe('oliver@email.com');
    expect(manager.officeNumber).toBe('111');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Oliver');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('007');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('oliver@email.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('111');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});