const statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};


// write a for...in loop that will iterate through it and print out the value of 
// the property if the property starts with the letter r, or if the value of that property is an odd number


for (const key in statistics) {
    const value = statistics[key];
    if (key.startsWith('r') || value % 2 != 0) {
        console.log(statistics[key]);
    }
}