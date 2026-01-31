console.log("Good Morning")

setTimeout(()=>{
    
    console.log("Good Night")
},5000)

console.log("Good Afternoon")

const x = setInterval(()=>{
    console.log("tea time")
},1000)

setTimeout(()=>{
    clearInterval(x)
    console.log("No tea Please sleep")
},6000)