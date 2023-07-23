
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html in the browser and it should show "Hello World!"
*/

/* Pre-requisites
    - Install a development server globally on your machine using Node.js:
    npm install -g http-server
    - navigate to the directory where q5-output.html, q5.js, and external.js are located
    - Start development server:
    http-server
*/

// Task 1: Add code here
import print from './external.js';

// Do not change the code below
document.querySelector("#test").innerHTML = print();
