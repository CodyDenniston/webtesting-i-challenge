const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
	it('should run tests without errors', () => {
		// arrange --> setup the world
		// act --> execute the code we're testing
		// assert --> check our assumptions

		expect(true).toBe(true);
	});

	describe('.repair()', function () {
		it('Should take durability to 100', function () {
			expect(enhancer.repair({ durability: 20 })).toEqual({ durability: 100 });
		});
	});
	describe('.succeed()', function () {
		it('should enhance the object', function () {
			expect(enhancer.succeed({ enhancement: 5 })).toEqual({ enhancement: 6 });
		});
	});
	describe('.fail()', function () {
		it('should change durability and enhancement', function () {
			expect(enhancer.fail({ enhancement: 5, durability: 20 })).toEqual({
				enhancement: 5,
				durability: 15,
			});
			expect(enhancer.fail({ enhancement: 20, durability: 50 })).toEqual({
				enhancement: 19,
				durability: 40,
			});
		});
	});
});
