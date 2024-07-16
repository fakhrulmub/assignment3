function subArray(arr) {
    let max_so_far = -Infinity;
    let max_ending_here = 0;
    let start = 0, end = 0, s = 0;

    for (let i = 0; i < arr.length; i++) {
        max_ending_here += arr[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }

    const subarray = arr.slice(start, end + 1);
    return [subarray, max_so_far];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output: [[4, -1, -2, 1, 5], 7]
