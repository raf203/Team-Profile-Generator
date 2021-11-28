const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        test('this should return an Manager name', () => {
            const str = 'Raf';
            const result = new Manager(str, '123', 'test@test.com', '111111111').getName()
            expect(result).toBe(str);
        })
    })

    describe('getId', () => {
        test('this should return a Manager id', () => {
            const str = '123';
            const result = new Manager('Raf', str, 'test@test.com', '111111111').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'test@test.com';
            const result = new Manager('Raf', '123', str, '111111111').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe('getRole', () => {
        test('this should return the role of the Manager', () => {
            const role = "Manager";
            const result = new Manager('Raf', '123', 'test@test.com', '111111111').getRole();
            expect(result).toEqual(role);
        });
    });

    describe('getOfficeNumber', () => {
        test('this should return the office number', () => {
            const str = '111111111';
            const result = new Manager('Raf', '123', 'test@test.com', str).getOfficeNumber();
            expect(result).toEqual(str);
        });
    });
});