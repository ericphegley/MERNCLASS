//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases


var student1 = {Name: "Bob", Age: 20, S1: "DSA", S2: "MERN", S3: "AWS"}
var student2 = {Name: "John", Age: 25, S1: "Spring", S2: "MERN", S3: "Java"}

function StudentSubjects(experience, area){
    console.log(`
        ${this.Name}
        ${this.Age}
        ${experience}
        ${area}`
    )
}


StudentSubjects.call(student1, 2, "Javatrack")
StudentSubjects.call(student2, 1, "Datatrack")


function ListSubjects(s1, s2, s3, s4){
    var allSubs = "" + s1 + " " + s2 + " " + s3 + " "+ s4
    console.log(`
        ${this.Name}
        ${this.Age}
        ${allSubs}`
    )
}

ListSubjects.apply(student1, ["a", "b", "c", "d"])
ListSubjects.apply(student2, [1, 2, 3, 4])
