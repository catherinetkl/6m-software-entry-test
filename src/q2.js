/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Declare an array that is going to be used to store patient's name
const patientNames = [];

// Task 2: Add code to add patient's name into the array declared in task 1
function addPatient(patientName) {
  patientNames.push(patientName);
}

/* Task 3: Implement listPatient() function to print all patient's name
stored in the array */
function listPatient() {
  console.log(patientNames);
}

// Add patients
addPatient("John");
addPatient("Mary");
addPatient("Mark");

/* invoke the listPatient() function to print all patients' names
stored in the array ["John", "Mary", "Mark"] */
listPatient();
