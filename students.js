const students = [ 
    { name: "John", age: 20, grade: "A" }, 
    { name: "Jane", age: 19, grade: "B" }, 
    { name: "Sam", age: 21, grade: "A+" }, 
    { name: "Emily", age: 18, grade: "B+" } ];


console.log(students.filter(student => student.age >= 20).map(student => student.name))