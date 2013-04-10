/**
 *
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/10/13
 * Time: 1:13 AM
 */

describe("item34", function () {
    it("should create User successfuly.", function () {
        function User(name, passwordHash) {
            this.name = name;
            this.passwordHash = passwordHash;
            this.toString = function () {
                return "[User " + this.name + "]";
            };
            this.checkPassword = function (password) {
                return password === this.passwordHash;
            };
        };

        var user = new User("bowen", "123456");

        expect(user.checkPassword("123456")).toBeTruthy();

    });

    it("should use prototype to share method", function () {
        function User(name, passwordHash) {
            this.name = name;
            this.passwordHash = passwordHash;

        };
        User.prototype.toString = function () {
            return "[User " + this.name + "]";
        };
        User.prototype.checkPassword = function (password) {
            return password === this.passwordHash;
        };

        var bowen = new User("bowen", "123456");
        var zengyan = new User("zengyan", "123456");
        expect(bowen.toString()).toBe("[User bowen]");
        expect(zengyan.toString()).toBe("[User zengyan]");

    });



});
