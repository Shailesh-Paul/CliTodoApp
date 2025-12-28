import readLine from 'readline';
import fs from 'fs';
import path from 'path';

const rl= readLine.createInterface({

    input:process.stdin,
    output:process.stdout
})


const todos=[];


const showMenu=()=>{
    console.log("\n1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    
    rl.question("Choose an Option",handleInput)
    
}

const handleInput=(option)=>{
    if(option==="1"){
        rl.question("Enter the Task:", (task)=>{
            todos.push(task);
            console.log("Task Added:", task);
            showMenu();
            
        })

       
    } else if(option==="2"){
        console.log("The tasks list are:");
        todos.forEach((ele,idx)=>{
            console.log(`${idx+1} ${ele}`);
            
        })
        showMenu();
        
    }
    else if(option==="3"){
        console.log("GoodBye");
        rl.close();
        
    }
    else{
        console.log("Invalid Options");
        showMenu();
    }
}
showMenu();