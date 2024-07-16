function hasMinimalLength(numbers) {
   return numbers.length < 2;
}

function getDifference(numbers) {
   return numbers[1] - numbers[0];
}

function isConsistentDifference(numbers, difference) {
   for (let i = 1; i < numbers.length - 1; i++) {
       if (numbers[i + 1] - numbers[i] !== difference) {
           return false;
       }
   }
   return true;
}

function isArithmeticProgression(numbers) {
   if (hasMinimalLength(numbers)) {
       return true;
   }

   const difference = getDifference(numbers);

   return isConsistentDifference(numbers, difference);
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
