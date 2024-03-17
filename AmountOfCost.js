var services = {
    "стрижка": "60 грн",
    "гоління": "40 грн",
    "Миття голови": "200 грн",
    price: function() {
        let total = 0;
        for (let price of Object.values(this)) {
        if (typeof price === "string") {
            total += parseFloat(price);
            }
        }
        return total;
  },

     minPrice: function() {
        let minValue = null;
        for (let price of Object.values(this)) {
            if (typeof price === "string") {
                let currentValue = parseFloat(price);
        if (minValue === null || currentValue < minValue) {
            minValue = currentValue;
        }
      }
    }
    return minValue || 0;
  },

    maxPrice: function() {
        let maxValue = 0;
        for (let price of Object.values(this)) {
            if (typeof price === "string") {
                let currentValue = parseFloat(price);
            if (currentValue > maxValue) {
                maxValue = currentValue;
        }
      }
    }
    return maxValue;
  }

};

services["Розбити скло"] = "2050 грн";

console.log(services.price()); 
console.log(services.minPrice()); 
console.log(services.maxPrice());

