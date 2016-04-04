/*My friend John and I are members of the "Fat to Fit Club (FFC)". John is
worried because each month a list with the weights of members is published and
each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I
will modify the order of the list". It was decided to attribute a "weight" to
numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list
100 will come before 99. Given a string with the weights of FFC members in
normal order can you give this string ordered by "weights" of these numbers?

Example:

a = "56 65 74 100 99 68 86 180 90"ordered by numbers weights becomes: "100 180
90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were
strings and not numbers: 100 is before 180 because its "weight" (1) is less
than the one of 180 (9) and 180 is before 90 since, having the same "weight"
(9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty. */

function orderWeight(strng) {
    var weights = strng.split(' ');

    weights.sort(function(a, b) {
      var aSum = 0;
      for (var i = 0; i < a.length; i++) {
        aSum += parseInt(a[i]);
      }
      var bSum = 0;
      for (var j = 0; j < b.length; j++) {
        bSum += parseInt(b[j]);
      }

      if (aSum === bSum) {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }

      } else if (aSum < bSum) {
        return -1;
        }
      return 1;
    });

    return weights.join(" ");
}


 // alternatively:


function orderWeightV2(strng) {
    var weights = strng.split(' ');

    weights.sort(function(a, b) {
      var aSum = getSum(a);
      var bSum = getSum(b);

      if (aSum === bSum) {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }

      } else if (aSum < bSum) {
        return -1;
        }
      return 1;
    });

    return weights.join(" ");
}

function getSum(str) {
  return str.split('').reduce(function(sum, next) {
    return sum + Number(next);
  }, 0);
}

// alternatively:


function orderWeight(strng) {
    var weights = strng.split(' ');

    weights.sort(function(a, b) {
      var aSum = getSum(a);
      var bSum = getSum(b);
      return aSum === bSum ? a.localeCompare(b) : aSum - bSum;
    });
    return weights.join(" ");
}


function getSum(str) {
  return str.split('').reduce(function(sum, next) {
    return sum + Number(next);
  }, 0);
}