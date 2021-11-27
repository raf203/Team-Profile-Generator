const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        test('this should return an employee name', () => {
            const str = 'Diane';
            const result = new Employee().getName().str;
            expect(result).toBe(true);
        })
    })

    describe('getId', () => {
        test('this should return an employee id', () => {
            const str = '123';
            const result = new Employee().getId();
            expect(result).toEqual(true);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'bob@gmail.com';
            const result = new Employee().getEmail(str);
            expect(result).toEqual(true);
        })
    })
});