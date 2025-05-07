export function sorter() {
    const numbers = [5, 3, 8, 1, 2];
    console.log("Original array:", numbers);

    const sortedNumbers = numbers.sort((a, b) => a - b);
    console.log("Sorted array:", sortedNumbers);

    console.log("Hello, World!");
}
