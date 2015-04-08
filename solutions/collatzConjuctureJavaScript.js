// Collatz Conjucture
// Solution found at https://github.com/quitrk/LearningJS/blob/master/Classic%20Algorithms/00.%20Collatz%20Conjecture.js

var collatz = function (n) {
    "use strict";

    var steps = 0;

    (function recursive(n) {
        if (n <= 1) {
            return;
        }

        n = n % 2 === 0 ? n / 2 : n * 3 + 1;

        steps++;
        recursive(n);
    }(n));

    return steps;
};

this.console.log(collatz(20));