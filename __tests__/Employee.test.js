const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        test('this should return an employee name', () => {
            const str = 'Diane';
            const result = new Employee(str, '11111', 'test@test.com').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('this should return an employee id', () => {
            const str = '123';
            const result = new Employee('Rafael', str, 'test@test.com').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'diane@email';
            const result = new Employee('Rafael', '11111', str).getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the employee", () => {
            const role = "Employee";
            const result = new Employee('Rafael', '11111', 'test@test.com').getRole();
            expect(result).toEqual(role);
        });
    });
});