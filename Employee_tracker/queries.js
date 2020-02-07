const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "serfs_db"
});

connection.connect(function (err){
    if (err) throw err;
    console.log("*Hacker voice* I'M IN");
    console.log("connected as id "+connection.threadId+"\n");
    findWageSlaves();
});

function findWageSlaves() {
    inquirer
        .prompt({
            name:"action",
            type: "rawlist",
            message: "Whom would you fancy to see this evening, my lord?",
            choices: [
                "Add another poor soul?",
                "View your Kingdom?",
                "Update a subordinate?"
            ]
        })
        .then(function(answer){
            switch(answer.action){
                case "Add another poor soul?":
                    addSoul();
                    break;
                case "View your Kingdom?":
                    viewKingdom();
                    break;
                case "Update a subordinate?":
                    updateSubordinate();
                    break;
            }
        });
}

function updateSubordinate(){
    inquirer
        .prompt({
            name: "updateRequest",
            type: "rawlist",
            message: "What Would you like to update?",
            choices: [
                "I would like to update a department!",
                "I would like to update a role!",
                "I would like to update a serf!"
            ]
        })
        .then(function(answer){
            switch(answer.updateRequest){
                case "I would like to update a department!":
                    console.log("Department it is!");
                    updateDepartment();
                case "I would like to update a role!":
                    console.log("Role it is!");
                    updateRole();
                case "I would like to update a serf!":
                    console.log(">:D");
                    updateSoul();
            }
        })
}

function updateDepartment(){
    inquirer
        .prompt({
            name: "department",
            type: "rawlist",
            message: "What would you like promote?",
            choices: [
                "I want to promote the serfs to kings!",
                "I want to bless my kings!"
            ]
        })
        .then(function(answer){
            switch(answer.department){
                case "I want to promote the serfs to kings!":
                    let query = ""//placeholder
                    console.log("it is done my lord!");
            }
        })
}

function viewKingdom(){
    inquirer
        .prompt({
            name: "requestedView",
            type: "rawList",
            message: "What Would you like to view?",
            choices: [
                "I would like to view a department!",
                "I would like to view a role!",
                "I would like to view a serf!"
            ]
        })
        .then(function(answer){
            switch(answer.requestedView){
                case "I would like to view a department!":
                    console.log("Department it is!");
                    viewDepartment();
                case "I would like to view a role!":
                    console.log("Role it is!");
                    viewRole();
                case "I would like to view a serf!":
                    console.log(">:D");
                    viewSoul();
            }
        })
}

function addSoul(){
    inquirer
        .prompt({
            name: "requestedItem",
            type: "rawList",
            message: "What Would you like to add?",
            choices: [
                "I decree adding a department",
                "I decree adding a role",
                "I decreee adding a subject to my kingdom!"
            ]
        })
        .then(function(answer){
            switch(answer.requestedItem){
                case "I decree adding a department":
                    console.log("Another department it is!");
                    addDepartment();
                case "I decree adding a role":
                    console.log("Another role it is!");
                    addRole();
                case "I decreee adding a subject to my kingdom!":
                    console.log("Another soul to add to the kingdom! >:D");
                    addSoul();
            }
        })
}