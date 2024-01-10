interface Student{
	firstName : string;
	lastName: string;
	age:Number;
	location: string

}

let std1 : Student = {
	firstName : "shaza",
	lastName: "Aly",
	age:10;
	location: "Cairo"

}
let std2 : Student = {
	firstName : "Ahmed",
	lastName: "Aly",
	age:12,
	location: "USA"
}
let studentsList : Array<Student> = [std1, std2]

