
function CreateUserAccount(username, password){
	this.UserId = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
	this.username = username;
	this.password = password;
};
//check if username is already taken
function userNameExits(arr , username){
    for(let i = 0; i < arr.length; i++){
        if((username) == arr[i].username){
            alert("She's already taken");
            return true;
        }
        return false;
    }

$(document).ready(function(){
    let testArray = [];
    let createAccount = false;

    $("#newAccount").submit(function(e){
        e.preventDefault();
        //check if password and confirm password match
        if($("#password").val() != $("#repeat-password").val()){
            alert("Passwords do not match");
            //clear the second password field
            $("#repeat-password").val("");
            createAccount = false;
        }
        //check if username is already taken
        else if(testArray.length > 0 && userNameExits(testArray, $("#username").val())){
            alert("Username already taken");
            //clear the username and password fields
            $("#username").val("");
            $("#password").val("");
            $("#repeat-password").val("");
            createAccount = false;
        }
        else{
            //create a new user account object
            let newUser = new CreateUserAccount($("#username").val(), $("#password").val());
            //store the user account object to an array
            //temp solution before using a database
            testArray.push(newUser);
            console.log(testArray);
        }
    });

    $("#login").submit(function(){
        //check if username and password match
        let username = $("#username").val();
        let password = $("#password").val();
        let userFound = false;

        for(let i = 0; i < testArray.length; i++){
            if(username == testArray[i].username && password == testArray[i].password){
                userFound = true;
                break;
            }
        }

        if(userFound){
            alert("Login successful");
        }
        else{
            alert("Login failed");
        }
    });
});	