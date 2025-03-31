//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the name of person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list

let jsTagged = persons.filter((person) => person.tags == "javascript");
console.log(jsTagged)

let javaTagged = persons.map((person)=>{
    if(person.tags == "java"){
        return {"Developer": person.name + " programmer"}
    }
}).filter((names) => names != undefined)
console.log(javaTagged)

let pythonTagged = persons.some((person) => person.tags == "python");
console.log(pythonTagged)




Promise.all
