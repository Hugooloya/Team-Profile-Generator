const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Oliver', '007', 'oliver@email.com', 'oliverloya');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Oliver');
    expect(engineer.id).toBe('007');
    expect(engineer.email).toBe('oliver@email.com');
    expect(engineer.githubUsername).toBe('oliverloya');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Oliver');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('007');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('oliver@email.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('oliverloya');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});