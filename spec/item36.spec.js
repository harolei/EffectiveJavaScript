/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/10/13
 * Time: 10:35 PM
 */

describe("item36", function () {
    it("should get unexpected data", function () {
        function Tree(x) {
            this.value = x;
        };
        Tree.prototype = {
            children: [],
            addChild: function (x) {
                this.children.push(x);
            }
        };

        var left = new Tree(2);
        left.addChild(1);
        left.addChild(3);
        var right = new Tree(6);
        right.addChild(5);
        right.addChild(7);
        var top = new Tree(4);
        top.addChild(left);
        top.addChild(right);
        expect(top.children).toEqual([1, 3, 5, 7, left, right]);
    });

    it("should get correct data", function () {
        function Tree(x) {
            this.value = x;
            this.children = [];
        }

        Tree.prototype = {
            addChild: function (x) {
                this.children.push(x);
            }
        };
        var left = new Tree(2);
        left.addChild(1);
        left.addChild(3);
        var right = new Tree(6);
        right.addChild(5);
        right.addChild(7);
        var top = new Tree(4);
        top.addChild(left);
        top.addChild(right);

        expect(top.children).toEqual([left, right]);
    });
});