const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        test('this should return an Engineer name', () => {
            const str = 'Diane';
            const result = new Engineer(str, '123', 'diane@').getName()
            expect(result).toBe(str);
        })
    })

    describe('getId', () => {
        test('this should return an Engineer id', () => {
            const str = '123';
            const result = new Engineer('Diane', str, 'diane@').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'bob@gmail.com';
            const result = new Engineer('Diane', '123', str).getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the Engineer", () => {
            const role = "Engineer";
            const result = new Engineer('Diane', '123', 'diane@').getRole();
            expect(result).toEqual(role);
        });
    });
});