//1
var arr = [
    "Tracy", "USA", 25, "single", "Jesus"
]

//2
arr[arr.length] = "mylove";

//3
arr[3] = "married";

//4
let arr = [0,1,2,3,4,[5,6,7],8,9];

//5
console.log(arr.flat()[5]);

//6
console.log(arr[arr.length - 1]);

//7
arr = [0,1,2,3,4,[5,6,7],8,9];

arr[0] = 1;
arr[1] = 0;
console.log(arr)


//8
let classes = {
    Students:"",
    Girls:"",
    Boys:"",
}

//9
classes.ages = ""

//10
console.log(classes.Students);

//11
console.log(classes.ages);

//12
let people = [
    {name: "Mary", contact: 0881999000},
//13
    {name: "Paul", contact: 0881999600},
//14
    {name: "Peter", contact: 0881999400},
//15
    {name: "Sarah", contact: 0881999300}
]

//16
console.log(people[0].name)

//17
people[0]['gender'] = "Female"
people[1]['gender'] = "Male"
people[2]['gender'] = "Male"
people[3]['gender'] = "Female"

//18
people.name = "Vallyk"

//19
console.log(people[3].contact);

