/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/11/13
 * Time: 4:39 PM
 */

describe("item34", function () {
    it("should not inherit standard class", function () {
        function Dir(path, entries) {
            this.path = path;
            entries.forEach(function (entry, index) {
                this[index] = entry;
            });
        };
        Dir.prototype = Object.create(Array.prototype);

        var dir = new Dir('c:\dev', ['path1', 'path2', 'path3']);
        expect(dir.length).toBe(0);
        expect(Object.prototype.toString.call(dir)).toBe('[object Object]');
        expect(Object.prototype.toString.call([])).toBe('[object Array]');
    });

    it("should correct behaviour", function () {
        function Dir(path, entries) {
            this.path = path;
            this.entries = entries;
        };
        Dir.prototype.forEach = function (f, thisArg) {
            if (typeof thisArg === "undefined") {
                thisArg = this;
            }
            this.entries.forEach(f, thisArg);
        };

        Dir.prototype.length = function(){
            return this.entries.length;
        }

        var dir = new Dir('c:\dev', ['path1', 'path2', 'path3']);
        expect(dir.entries.length).toBe(3);
        expect(dir.length()).toBe(3);
    });
});