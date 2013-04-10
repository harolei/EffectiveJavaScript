/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/10/13
 * Time: 11:19 PM
 */

describe("item38", function () {
    it("space", function () {
        function Scene(context, width, height, images) {
            this.context = context;
            this.width = width;
            this.height = height;
            this.images = images;
            this.actors = [];
        };
        Scene.prototype.register = function (actor) {
            this.actors.push(actor);
        };
        Scene.prototype.unregister = function (actor) {
            var i = this.actors.indexOf(actor);
            if (i >= 0) {
                this.actors.splice(i, 1);
            }
        };
        Scene.prototype.draw = function () {
            this.actors.forEach(function (actor) {
                console.info("draw");
            });
        };

        function Actor(scene, x, y) {
            this.scene = scene;
            this.x = x;
            this.y = y;
            scene.register(this);
        };
        Actor.prototype.moveTo = function (x, y) {
            this.x = x;
            this.y = y;
            this.scene.draw();
        };
        Actor.prototype.exit = function () {
            this.scene.unregister(this);
            this.scene.draw();
        }
        Actor.prototype.draw = function () {
            var image = this.scene.images[this.type];
            this.scene.context.drawImage(image, this.x, this.y);
        }
        Actor.prototype.width = function () {
            return this.scene.images[this.type].width;
        }
        Actor.prototype.height = function () {
            return this.scene.images[this.type].height;
        }
        function SpaceShip(scene, x, y) {
            Actor.call(this, scene, x, y);
            this.points = 0;
        }

        SpaceShip.prototype = Object.create(Actor.prototype);

        SpaceShip.prototype.type = "SpaceShip";
        SpaceShip.prototype.scorePoint = function () {
            this.points++;
        };
        SpaceShip.prototype.left = function () {
            this.moveTo(Math.max(this.x - 10, 0), this.y);
        };
        SpaceShip.prototype.right = function () {
            var maxWidth = this.scene.width - this.width();
            this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
        };

        var scene = new Scene(null, null, 100, 100, null);
        var spaceShip = new SpaceShip(scene, 10, 10);
        spaceShip.left();
        expect(spaceShip.x).toBe(0);
        expect(scene.actors).toContain(spaceShip);
    });
});