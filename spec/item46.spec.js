/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 4/11/13
 * Time: 10:46 PM
 */

describe('item46', function () {
    it("ordered report", function () {
        function report(highScores) {
            var result = "";
            var i = 1;
            for (var name in highScores) {
                result += i + "." + name + ":" + highScores[name] + "\n";
                i++;
            }
            return result;
        };
        var result = report([
            {name: "Hank", points: 1110100},
            {name: "Steve", points: 1064500 },
            {name: "Billy", points: 1050200}
        ]);
        console.log(result);
    });

    it("another way to ordered report", function () {
        function report(highScores) {
            var result = "";
            highScores.forEach(function (score, index) {
                result += (index + 1) + "." + score.name + ":" + score.points + "\n";
            });
            return result;
        };

        var reports = report([
            {name: "Hank", points: 1110100},
            {name: "Steve", points: 1064500},
            {name: "Billy", points: 1050200}
        ]);

        expect(reports).toBe("1.Hank:1110100\n2.Steve:1064500\n3.Billy:1050200\n");

    });

    it("toClose", function () {
        var ratings = {
            "Good Will Hunting": 0.8,
            "MyStic River": 0.7,
            "21": 0.6,
            "Doubt": 0.9
        };

        var total = 0; count = 0;
        for(var key in ratings) {
            total += ratings[key];
            count++;
        }
        total /= count;
        expect(total).toBeCloseTo(0.75,0.0000001);
    });
});