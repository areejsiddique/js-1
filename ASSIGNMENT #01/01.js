                                    //QUESTION 01

//let num1 = prompt("Enter 1st Number");
//let num2 = prompt("Enter 2nd Number");
// if (num1 > num2) {console.log( num1 + " is larger than " + num2);}
//else if (num2 > num1) {console.log(num2 + " is larger than " + num1);}
//else {console.log(num1 + " is equal to " + num2);}

                                     //QUESTION 02

let num = prompt ("Enter a number");
if (num > 0)
{ alert("The sign is positive");}
 else if (num < 0)
{ alert("The sign is negative");}
else { alert("Number is zero");}

                                      //QUESTION 03

let num1 = +prompt("Enter 1st Number");
let num2 = +prompt("Enter 2nd Number");
let num3 = +prompt("Enter 3rd Number");
let num4 = +prompt("Enter 4th Number");
let num5 = +prompt("Enter 5th Number"); 
 let max = Math.max (num1, num2, num3, num4, num5);
 console.log("The largest number is" + max);

                                       //QUESTION 04
               
for (let i = 0; i <= 15; i++) 
{if (i % 2 === 0 ){document.write(i + " even" + "<br>");}
else {document.write(i + " odd" + "<br>");}}
             
             
                                      //QUESTION 05

let students = [
    { name: "Haya", marks: [ 98, 92, 89, 94, 85] },
    { name: "Ansharah", marks: [86, 74, 70, 90, 85 ] },
    { name: "Ayesha", marks:  [60, 59, 70, 75, 83]}
]; 

students.forEach((student) => {
  const avg = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  student.avg = avg;

  let grade;
  if (student.avg < 60) {
    grade = "F";
  } else if (student.avg < 70) {
    grade = "D";
  } else if (student.avg < 80) {
    grade = "C";
  } else if (student.avg < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  student.grade = grade;
});

document.write("<h1>MARKSHEET </h1>");
document.write("<table>");
document.write("<tr><th>Student Name </th><th>Range </th><th>Grade </th></tr>");


students.forEach((student) => {
  document.write(`<tr><td>${student.name}</td>
  <td>${student.avg.toFixed(2)}</td>
  <td>${student.grade}</td></tr>`);
});
document.write("</table>");

                                //QUESTION 06
                
    for (let i=0; i<=100; i++) {if (i % 3 === 0 && i % 5 === 0) {document.write("FizzBuzz")}
else if (i % 3 === 0) {document.write(" Fizz <br> ")}
else if (i % 5 === 0) {document.write(" Buzz <br>") }
else {document.write ( i + "<br>")}}

                                //QUESTION 07

for (let i = 1; i <= 5; i++) {
for (let j = 1; j <= i; j++) { document.write("* "); }
 document.write("<br>"); }

   


