// // class Table {
// //   height;
// //   width;
// //   constructor(height, width) {
// //     this.height = height;
// //     this.width = width;
// //   }
// // }
// // const myTable = new Table(182, 70);
// // //איך ניגשים לתכונות בשביל להדפיס ?
// // console.log(myTable.height);
// // //ביצוע השמה מחדש אפשרי גם
// // myTable.height = 100;
// // //----------------------------------------------------------------------------------------

// // class Student{
// //     constructor(name,claass,id){
// //         this.name = name;
// //         this.claass = claass;
// //         this.id = id;
// //     }
// // }
// // console.log(new Student("lior", 11, 1992314));
// // console.log(new Student(`yaso`, 10, 232122));
// 4.
class User {
  constructor(firtsName, lastName, age, email) {
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}
btn.onclick = () => {
  let one = new User(firtsName.value, lastName.value, age1.value, email.value);
  tbody.innerHTML = `<tr><td>${one.firtsName}</td><td>${one.lastName}</td><td>${one.age}</td><td>${one.email}</td></tr>`;
};

7;
class Dog {
  constructor(firstName, type, date) {
    this.firstName = firstName;
    this.type = type;
    this.date = date;
  }
}
8;
let dog1 = new Dog("alaila", "pitbull", "20/2/1992");
let dog2 = new Dog("avi", "pitbull", "20/2/1992");
let dog3 = new Dog("ori", "pitbull", "20/2/1992");
let dog4 = new Dog("ali", "pitbull", "20/2/1992");
const myArray = [dog1, dog2, dog3, dog4];
console.log(myArray);
myArray.forEach((i) => {
  console.log(i);
});

9;
// class Teacher{
//     constructor(firstName,lastName,claas,email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.claas = claas;
//         this.email = email;
//     }
// }

11;
