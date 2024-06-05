// learningData.js

// Alphabets
const alphabets = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index) + '-' + String.fromCharCode(97 + index));

// Urdu Letters (just for example, you can replace these with actual Urdu letters)
const urduLetters = Array.from({ length: 36 }, (_, index) => String.fromCharCode(161 + index));

// Maths Numbers
const mathsNumbers = Array.from({ length: 10 }, (_, index) => index.toString());

// Plants
const plantNames = ['Rose', 'Sunflower', 'Lily', 'Tulip', 'Daisy'];

// Animals
const animalNames = ['Lion', 'Elephant', 'Monkey', 'Giraffe', 'Penguin'];

// Furniture Items
const furnitureItems = ['Chair', 'Table', 'Sofa', 'Bed', 'Bookshelf'];

export { alphabets, urduLetters, mathsNumbers, plantNames, animalNames, furnitureItems };
