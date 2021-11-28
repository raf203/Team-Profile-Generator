const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        test('this should return an Intern name', () => {
            const str = 'Raf';
            const result = new Intern(str, '123', 'Raf@email', 'school').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('this should return an Intern id', () => {
            const str = '123';
            const result = new Intern('Raf', str, 'Raf@email', 'school').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'Raf@email';
            const result = new Intern('Raf', '123', str, 'school').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the Intern", () => {
            const role = "Intern";
            const result = new Intern('Raf', '123', 'Raf@email', 'school').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("this should return the school of the Intern", () => {
            const str = 'school';
            const result = new Intern('Raf', '123', 'Raf@email', str).getSchool();
            expect(result).toEqual(str);
        });
    });
});