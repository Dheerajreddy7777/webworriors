// getStudent(1,(student)=>{
//     getSubjects(student.id,(subjects)=>{
//         getMarks(subjects[0],(mark)=>{
//             console.log(mark);
//         })
//     })
// })

// const { reject } = require("async");


// console.log("first line");
// function getStudent(id,callback){
//     setTimeout(()=>{
//         console.log("Getting data from Database");
//         callback({name:"Bob",id:id})
//     },2000)
// }

// function getSubjects(id,callback){
//     setTimeout(()=>{
//         console.log("Getting subjects of Student id:", id);
//         callback(["maths","HTML","CSS"])
//     },2000)
// }

// function getMarks(subject,callback){
//     setTimeout(()=>{
//         console.log("Getting Marks of", subject);
//         callback(80)
//     },2000)
// }



function getstudent(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("getting data from database")
            resolve({name:"ddr",id:id})

        },2000)
    })
}

function getsubjects(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("getting subjects of student id:",id)
            resolve(["MATHS","physics","html"])
        },2000)
    })
}

function getmarks(subjects){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        
        console.log("gettign marks of",subjects)
        resolve(70)
    },2000)
    })
}

getstudent(1)
    .then((student)=>{
        return getsubjects(student.id)
    })
    .then((subjects)=>{
        return getmarks(subjects[1])
    })
    .then((marks)=>{
        console.log(marks)
    })