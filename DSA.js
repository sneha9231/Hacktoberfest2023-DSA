// Data Structure: Array
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Algorithm: Linear Search
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Element found at index i
        }
    }
    return -1; // Element not found
}

const targetElement = 70;
const result = linearSearch(data, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
