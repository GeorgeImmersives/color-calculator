const prompt = require('prompt-sync')();

let instruction = prompt("Enter 2 colors to combine them or 1 color to deconstruct: ");


if(instruction.includes(" ")){
    if(instruction.includes("red") && instruction.includes("blue")){
        console.log("The new color is Purple");
    }
    else if(instruction.includes("red") && instruction.includes("yellow")){
        console.log("The new color is Orange");
    }
    else if(instruction.includes("blue") && instruction.includes("yellow")){
        console.log("The new color is Green");
    }
    else{
        console.log("Error");
    }
}
else{
    if(instruction == "purple"){
        console.log("Purple is made up of Red and Blue");
    }
    else if(instruction == "orange"){
        console.log("Orange is made up of Red and Yellow");
    }
    else if(instruction == "green"){
        console.log("Green is made up of Blue and Yellow");
    }
    else{
        console.log("Error")
    }
}