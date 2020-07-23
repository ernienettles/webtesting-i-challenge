const enhancer = require('./enhancer.js');

describe("success()", function () {
    it('Should increase enhancement by 1', function () {
        const item = { name: 'sword', durability: 30, enhancement: 19 }

        const newItem = enhancer.success(item);

        expect(newItem.enhancement).toBe(20);
    })

    it('Should increase enhancement by 1', function () {
        const item = { name: 'sword', durability: 30, enhancement: 11 }

        const newItem = enhancer.success(item);

        expect(newItem.enhancement).toBe(12);
    })

    it('Should increase enhancement by 1', function () {
        const item = { name: 'sword', durability: 30, enhancement: 2 }

        const newItem = enhancer.success(item);

        expect(newItem.enhancement).toBe(3);
    })
});

describe("fail()", function () {
    it('Should decrease enhancement by 5', function () {
        const item = { name: 'sword', durability: 30, enhancement: 13 }

        const newItem = enhancer.fail(item);

        expect(newItem.enhancement).toBe(8);
    })

    it('Should decrease enhancement by 10', function () {
        const item = { name: 'sword', durability: 30, enhancement: 15 }

        const newItem = enhancer.fail(item);

        expect(newItem.enhancement).toBe(5);
    })

    it('Should decrease enhancement by 1', function () {
        const item = { name: 'sword', durability: 30, enhancement: 17 }

        const newItem = enhancer.fail(item);

        expect(newItem.enhancement).toBe(16);
    })
});

describe("repair()", function () {
    it('Should increase durability to 100', function () {
        const item = { name: 'sword', durability: 44, enhancement: 13 }

        const newItem = enhancer.repair(item);

        expect(newItem.durability).toBe(100);
    })

    it('Should increase durability to 100', function () {
        const item = { name: 'sword', durability: 75, enhancement: 13 }

        const newItem = enhancer.repair(item);

        expect(newItem.durability).toBe(100);
    })

    it('Should increase durability to 100', function () {
        const item = { name: 'sword', durability: 99, enhancement: 13 }

        const newItem = enhancer.repair(item);

        expect(newItem.durability).toBe(100);
    })

});

describe("get()", function () {
    it('Should add enhancement level to the beginning of the item name', function () {
        const item = { name: 'sword', durability: 44, enhancement: 13 }

        const newItem = enhancer.get(item);

        expect(newItem.name).toBe(`[+13] sword`);
    })

    it('Should add enhancement level to the beginning of the item name', function () {
        const item = { name: 'sword', durability: 44, enhancement: 20 }

        const newItem = enhancer.get(item);

        expect(newItem.name).toBe(`[+20] sword`);
    })

    it('Should not change name', function () {
        const item = { name: 'sword', durability: 44, enhancement: 0 }

        const newItem = enhancer.get(item);

        expect(newItem.name).toBe(`sword`);
    })

});