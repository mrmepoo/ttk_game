const chalk = require('chalk');
const moment = require('moment');
const validator = require('validator');

// Function sử dụng chalk
function logMessage(message) {
    console.log(chalk.blue(message));
}

// Function sử dụng moment
function getCurrentDate() {
    return moment().format('YYYY-MM-DD');
}

// Function sử dụng validator
function isValidURL(url) {
    return validator.isURL(url);
}
