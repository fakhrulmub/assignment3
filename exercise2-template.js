function findIndicesOfA(text) {
    let indices = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            indices.push(i);
        }
    }
    return indices;
}

function findIndicesOfB(text) {
    let indices = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'b') {
            indices.push(i);
        }
    }
    return indices;
}

function hasMinDistance(indicesA, indicesB, minDistance) {
    for (let i = 0; i < indicesA.length; i++) {
        for (let j = 0; j < indicesB.length; j++) {
            if (Math.abs(indicesA[i] - indicesB[j]) >= minDistance) {
                return true;
            }
        }
    }
    return false;
}

function threeStepsAB(text) {
    const indicesA = findIndicesOfA(text);
    const indicesB = findIndicesOfB(text);
    
    return hasMinDistance(indicesA, indicesB, 4);
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
