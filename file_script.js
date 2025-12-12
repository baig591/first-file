let a = 2;
let b = 3;
let sum = a + b;

console.log(sum);

function Student(name, marks,age) {
    return {
        name: name,
        marks: marks, 
        age:age,
        total: function() {
            let sum = 0;
            for (let mark of this.marks) {
                sum += mark;
            }
            return sum;
        },
        average: function() {
            return this.total() / this.marks.length;
        },
        result: function() {
            return this.marks.every(mark => mark >= 35) ? "Pass" : "Fail";
        }
    };
}


let student1 = Student("Ali", [45, 78, 82]);
let student2 = Student("ahad", [25, 55, 60]);


console.log(`Student: ${student1.name}`);
console.log(`Total Marks: ${student1.total()}`);
console.log(`Average Marks: ${student1.average()}`);
console.log(`Result: ${student1.result()}`);
console.log("----------------------");

console.log(`Student: ${student2.name}`);
console.log(`Total Marks: ${student2.total()}`);
console.log(`Average Marks: ${student2.average()}`);
console.log(`Result: ${student2.result()}`);
