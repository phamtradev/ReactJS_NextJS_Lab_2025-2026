function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log("Dolphins win (" + avgDolphins + " vs. " + avgKoalas + ")");
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log("Koalas win (" + avgKoalas + " vs. " + avgDolphins + ")");
    } else {
      console.log("No team wins!");
    }
  }
  
  // data 1
  var avgDolphins1 = calcAverage(44, 23, 71); 
  var avgKoalas1 = calcAverage(65, 54, 49);    
  checkWinner(avgDolphins1, avgKoalas1);       
  
  // data 2
  var avgDolphins2 = calcAverage(85, 54, 41);  
  var avgKoalas2 = calcAverage(23, 34, 27);    
  checkWinner(avgDolphins2, avgKoalas2);       
  