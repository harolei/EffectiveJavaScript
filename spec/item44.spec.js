/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/8/13
 * Time: 10:34 PM
 */

describe("Item44", function () {
    it("should run jasmine testing successfully", function () {
        expect(true).toBe(true);
    });

    it("should get Object property when set prototype to null", function () {
        function C() {
        };
        C.prototype = null;
        var o = new C();
        expect(Object.getPrototypeOf(o)).toBe(Object.prototype);
    });

    it("should get null property when using Object.getPrototypeOf to set null prototype", function () {
        var x = Object.create(null);
        expect(Object.getPrototypeOf(x)).toBeNull();
    });

    it("use __proto__", function () {
        var x = { __proto__: null};
        expect(x instanceof Object).toBeFalsy();
    });


});
