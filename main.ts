#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 100000; // Doller
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]
);
  
 if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}else  {
    console.log("worng pin code...");
}
     let operation = await inquirer.prompt(
        [ 
            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["deposit","withdraw", "check balanc","exit"]

    }
]
);
if (operation.operation === "deposit") {
let Amount = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "Enter your deposit",
            type: "number"
        }
    ]
);
       myBalance += Amount.Amount;
       console.log(`your withdraw Amount is ${Amount}`);
}     else if (operation.operation === "withdraw") {
    let amount = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "select amount for withdraw",
                type: "list",
                choices: [
                    "1000",
                    "5000",
                    "10000",
                    "15000",
                    "20000",
                    "25000",
                    "30000",
                    "35000",
                    "40000",
                    "45000",
                    "50000",
                    "55000",
                    "60000",
                
                ]
            }
        ]
        );
        if (myBalance < amount.amount) {
            console.log("your withdraw Amount is ...");

        }
        else {
            if (amount.amount === 1000) {
                myBalance -= 1000;
                console.log(`your balance is ${myBalance}`);
            }else if (amount.amount === 5000) {
                myBalance -= 5000;
                console.log(`your balance is ${myBalance}`);
            }else if (amount.amount === 10000) {
                myBalance -= 10000;
                console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 15000) {
            myBalance -= 15000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 20000) {
                myBalance -= 20000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 25000) {
            myBalance -= 25000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 30000) {
            myBalance -= 30000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 35000) {
                myBalance -= 35000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 40000) {
            myBalance -= 40000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 45000) {
            myBalance -= 45000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 50000) {
            myBalance -= 50000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 55000) {
            myBalance -= 55000;
            console.log(`your balance is ${myBalance}`);
        }else if (amount.amount === 60000) {
            myBalance -= 60000;
            console.log(`your balance is ${myBalance}`);
        }
    }
}
else if (operation.operation === "balance") {
    console.log(`your balance is ${myBalance}`);
}
else (operation.operation === "Exit");{
    console.log("thank you for your services");
    console.log("good bye");
}