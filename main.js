//  class Table {
//   height;
//   width;
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// const myTable = new Table(182, 70);
//מייצגים לי את הגובה והרוחב
//איך ניגשים לתכונות בשביל להדפיס ?
// console.log(myTable.height);
//ביצוע השמה מחדש אפשרי גם
// myTable.height = 100;
// // //----------------------------------------------------------------------------------------

// class Student {
//   constructor(name, claass, id) {
//     this.name = name;
//     this.claass = claass;
//     this.id = id;
//   }
// }
// console.log(new Student("lior", 11, 1992314));
// console.log(new Student(`yaso`, 10, 232122));
// 4.
// class User {
//   constructor(firtsName, lastName, age, email) {
//     this.firtsName = firtsName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }
// }
// btn.onclick = () => {
//   let one = new User(firstName.value, lastName.value, age1.value, email.value);
//   tbody.innerHTML = `<tr><td>${one.firstName}</td><td>${one.lastName}</td><td>${one.age}</td><td>${one.email}</td></tr>`;
// };

7;
// class Dog {
//   constructor(firstName, type, date) {
//     this.firstName = firstName;
//     this.type = type;
//     this.date = date;
//   }
// }

// let dog1 = new Dog("alaila", "zeev", "20/2/1992");
// let dog2 = new Dog("avi", "pitbull", "20/2/1992");
// let dog3 = new Dog("ori", "pincher", "20/2/1992");
// let dog4 = new Dog("ali", "naknik", "20/2/1992");
// const myArray = [dog1, dog2, dog3, dog4];
// console.log(myArray);
// myArray.forEach((i) => {
//   console.log(i);
// });

9;
// const newArray = [];
// function printTheKeyAndValue() {
//   class Teacher {
//     constructor(firstName, lastName, course, email) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.course = course;
//       this.email = email;
//     }
//   }
//   let teacher1 = new Teacher(
//     fName.value,
//     lName.value,
//     id_course.value,
//     email.value
//   );
//   if (newArray.length < 4) {
//     newArray.push(teacher1);
//     let tbody = document.getElementById("tbody");
//     newArray.forEach((item) => {
//       for (const key in item) {
//         th.innerHTML += `${key}`;
//         tr.innerHTML += `<td>${item[key]}</td>`;
//       }
//     });
//   }
// }

11+12
class course1 {
  constructor(firName, hadTeacher, gradeList = [], studentList = []) {
    this.firName = firName;
    this.hadTeacher = hadTeacher;
    this.gradeList = gradeList;
    this.studentList = studentList;
  }
}
let grades = [69,75,96,54,77,86];
let student = ["lior","aldad","avraham","dalia","yosi"];
let techCareer = new course1("lior",true,grades,student)
console.log(techCareer);

for(const key in techCareer){
  my_p.innerHTML += `${techCareer[key]}`
}
12.
console.log(student.sort());
13.
console.log(grades.sort((a,b)=>{return a-b}));

