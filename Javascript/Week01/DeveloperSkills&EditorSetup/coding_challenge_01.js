const printForecast = (arr) => {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result = result + "... " + arr[i] + "oC in " + (i + 1) + " days ";
  }

  console.log(result + "...");
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
