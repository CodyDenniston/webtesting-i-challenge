module.exports = {
	succeed,
	fail,
	repair,
	get,
};

// returns item modified according to rules defined by client for success
// - enhancement level +1
// - enhancement level 20 ? don't change
// - durability doesn't change
function succeed(item) {
	if (item.enhancement < 20) {
		item = {
			...item,
			enhancement: item.enhancement + 1,
		};
	}
	return item;
}

// returns item modified according to rules defined by client for failure
// - If item's enhancement is < 15, durability is decreased by 5.
// - If item's enhancement is > 15, durability is decreased by 10.
// - If item's enhancement level is > 16, -1 enhancment level (17 goes down to 16, 18 goes down to 17).

function fail(item) {
	if (item.enhancement < 15) {
		item = {
			...item,
			durability: item.durability - 5,
		};
	} else if (item.enhancement >= 15) {
		item = {
			...item,
			durability: item.durability - 10,
		};
	}
	if (item.enhancement > 16) {
		item = {
			...item,
			enhancement: item.enhancement - 1,
		};
	}
	return item;
}

// takes item and returns an item with durability 100
function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}
