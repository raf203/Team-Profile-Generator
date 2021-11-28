const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        test('this should return an Engineer name', () => {
            const str = 'Raf';
            const result = new Engineer(str, '123', 'test@tes.com', 'github').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('this should return an Engineer id', () => {
            const str = '123';
            const result = new Engineer('Raf', str, 'test@tes.com', 'github').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'test@tes.com';
            const result = new Engineer('Raf', '123', str, 'github').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the Engineer", () => {
            const role = "Engineer";
            const result = new Engineer('Raf', '123', 'test@tes.com', 'github').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("this should return the github account of the Engineer", () => {
            const str = 'github';
            const result = new Engineer('Raf', '123', 'test@tes.com', str).getGithub();
            expect(result).toEqual(str);
        });
    });
});