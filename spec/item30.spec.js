/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/12/13
 * Time: 12:29 AM
 */

describe("item30", function() {
    it("should get prototype", function () {
        function Person(name,age) {
            this.name = name;
            this.age = age;
        }

        Person.prototype.toString = function() {
            return "name:"+ this.name + ", age:" + this.age +".";
        }

        Function.prototype.testing = function() {
            return "testing";

        }

        var person = new Person("bowen",26);
        expect(Object.getPrototypeOf(person)).toBe(Person.prototype);
        expect(person.__proto__).toBe(Person.prototype);
        console.log(typeof Person.__proto__);
        console.log(typeof Person.prototype);
        console.log(typeof Object.getPrototypeOf(Person));
        console.log(Person.__proto__.testing());
        console.log(typeof person.__proto__);
        console.log(typeof person);
        console.log(typeof person.prototype);
        console.log(typeof Object.getPrototypeOf(person));
    });
});