/************************************************************
 * START - Midterm Exam - Practical
 ************************************************************/

/******************************
 * PART 1
 ******************************
 * 1. Create an ARRAY to store a list of "Teachers"
 * 2. Create an ARRAY to store a list of "Students"
 ******************************/
 var teachers = [];
 var students = [];
 
 /******************************
  * PART 2
  ******************************
  * 1. Create a CLASS named "Person"
  * 2. This class should have THREE fields, to store the following:
  *    - First Name
  *    - Last Name
  *    - Email
  * 3. This class should have a function that will print out details in a formatted way
  ******************************/








  
 
 class Person {
   constructor(firstName, lastName, email) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.email = email;
   }
 
   formatDetails() {
     return `${this.firstName} ${this.lastName} - ${this.email}`;
   }
 }
 
 /******************************
  * PART 3
  ******************************
  * 1. Create a CLASS named "Teacher" that INHERITS from the class created in PART 2
  * 2. This class should have ONE extra field, to store the following:
  *    - Employee Number
  * 3. Using POLYMORPHISM, adjust the function that prints out details to be specific to the "Teacher" class
  ******************************/
 class Teacher extends Person {
   constructor(firstName, lastName, email, employeeNumber) {
     super(firstName, lastName, email);
     this.employeeNumber = employeeNumber;
   }
 
   formatDetails() {
     return `${this.firstName} ${this.lastName} - Employee Number: ${this.employeeNumber}`;
   }
 }








 
 /******************************
  * PART 4
  ******************************
  * 1. Create a CLASS named "Student" that INHERITS from the class created in PART 2
  * 2. This class should have ONE extra field, to store the following:
  *    - Student Number
  * 3. Using POLYMORPHISM, adjust the function that prints out details to be specific to the "Student" class
  ******************************/






 
 class Student extends Person {
   constructor(firstName, lastName, email, studentNumber) {
     super(firstName, lastName, email);
     this.studentNumber = studentNumber;
   }
 
   formatDetails() {
     return `${this.firstName} ${this.lastName} - Student Number: ${this.studentNumber}`;
   }
 }








 
 /******************************
  * PART 5
  ******************************
  * 1. Create a NAMED function that takes ONE parameter called "type"
  * 2. This function should set the "statusLabel" element to "[type] created!"
  *    - Where [type] represents the "type" parameter
  ******************************/
 
 function setStatusLabel(type) {
   var statusLabel = document.getElementById("statusLabel");
   statusLabel.textContent = `${type} created!`;
 }








 
 /******************************
  * PART 6
  ******************************
  * 1. Create a NAMED function that takes NO parameters
  * 2. This function should clear values from each input field
  ******************************/
 function clearInputFields() {
   document.getElementById("firstNameInput").value = "";
   document.getElementById("lastNameInput").value = "";
   document.getElementById("emailInput").value = "";
   document.getElementById("numberInput").value = "";
 }









 
 /******************************
  * PART 7
  ******************************
  * 1. Create an EVENT for when the "Create Teacher" button is CLICKED, this event should do the following:
  *    - Create an OBJECT of "Teacher" using the values from the input elements
  *    - Add the object to the corresponding array from PART 1
  *    - Call the function from PART 5 with the correct "type" specified
  *    - Call the function from PART 6
  ******************************/
 document.getElementById("addTeacherBtn").addEventListener("click", function () {
   var firstName = document.getElementById("firstNameInput").value;
   var lastName = document.getElementById("lastNameInput").value;
   var email = document.getElementById("emailInput").value;
   var employeeNumber = document.getElementById("numberInput").value;
 
   var teacher = new Teacher(firstName, lastName, email, employeeNumber);
   teachers.push(teacher);
   setStatusLabel("Teacher");
   clearInputFields();
 });






 
 /******************************
  * PART 8
  ******************************
  * 1. Create an EVENT for when the "Create Student" button is CLICKED, this event should do the following:
  *    - Create an OBJECT of "Student" using the values from the input elements
  *    - Add the object to the corresponding array from PART 1
  *    - Call the function from PART 5 with the correct "type" specified
  *    - Call the function from PART 6
  ******************************/







 document.getElementById("addStudentBtn").addEventListener("click", function () {
   var firstName = document.getElementById("firstNameInput").value;
   var lastName = document.getElementById("lastNameInput").value;
   var email = document.getElementById("emailInput").value;
   var studentNumber = document.getElementById("numberInput").value;
 
   var student = new Student(firstName, lastName, email, studentNumber);
   students.push(student);
   setStatusLabel("Student");
   clearInputFields();
 });
 






 /******************************
  * PART 9
  ******************************
  * 1. Create an EVENT for when the "Print Registrations" button is CLICKED, this event should do the following:
  *    - Loop through the arrays from PART 1 and print out the details for each object
  ******************************/

 document.getElementById("printRegistrationsBtn").addEventListener("click", function () {
    var registrationDetails = document.getElementById("registrationDetails");
  
    if (!registrationDetails) {
      registrationDetails = document.createElement("div");
      registrationDetails.id = "registrationDetails";
      document.body.appendChild(registrationDetails);
    } else {
      registrationDetails.innerHTML = "";
    }
    teachers.forEach(function (teacher) {
      registrationDetails.innerHTML += teacher.formatDetails() + "<br>";
    });
    students.forEach(function (student) {
      registrationDetails.innerHTML += student.formatDetails() + "<br>";
    });
  });
  
 