

const Person = [{
    name :"Krushna",
    age : "21",
    profession : "coder",
    city : "pune",
    hobbies : ['Playing Instruments','Singing','Coding'],
    adress : {street : "Dattawadi"}
},{ 
    name : "Moin",
    age : "21",
    profession : "cooking",
    city : "Mumbai",
    hobbies : ["reading","cooking","travelling"],
    adress : {street : "thane"}
},{
    name : "Pawan",
    age : "25",
    profession : "PSI",
    city : "Pune",
    hobbies : ["Playing Piano","Exercise","Playing Games"],
    adress : {street : "shivaji Nagar"}
}]

console.log(Person)

let name =document.querySelector('h2').textContent += Person[2].name
let hobbies=document.querySelector('h3').textContent += Person[2].hobbies[0]