"use strict";
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. 
// Handy for seeing how well you did overall!
function averageScores(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScores(55, 45, 70, 65, 30));
