
const unicorn = {
    nameOfUnicorn : "Twilight Sparkle",
    age : 150,
    featureOfNature : "kindness",
    colorOfSkin : "violet",
    getInfo: function() {
        for (let key in this) {
          if (typeof this[key] !== 'function') {
            console.log(`${key}: ${this[key]}`);
          }
        }
      }
};

unicorn.getInfo();
unicorn.magic = "teleportation";
console.log("With new property: ");
unicorn.getInfo();