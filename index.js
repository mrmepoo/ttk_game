const ttkLibraryFunctions = require('ttk_library');

// Sử dụng các hàm từ ttk_library
const randomNumber = ttkLibraryFunctions.random(1, 10);
console.log('Random number:', randomNumber);

const sum = ttkLibraryFunctions.sumArray([1, 2, 3, 4, 5]);
console.log('Sum of array:', sum);

const email = 'example@gmail.com';
console.log('Is valid email:', ttkLibraryFunctions.isValidEmail(email));

console.log('Current datetime:', ttkLibraryFunctions.getCurrentDateTime());
