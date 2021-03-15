const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should fixme", function() {
    const gildedRose = new Shop([new Item("fixme", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });

  it("should return the initial Sulfuras, Hand of Ragnaros quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("should return ", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});
