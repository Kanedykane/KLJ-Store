const fs = require('fs');

function CreateUserAccount(username, password){
	this.UserId = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
	this.username = username;
	this.password = password;
};

$(document).ready(function(){
    $("#newAccount").submit(function(){
        //check if password and confirm password match
        if($("#password").val() != $("#repeat-password").val()){
            alert("Passwords do not match");
        }
        else{
            //alert("Submitted");
            //create a new user account object
            let newUser = new CreateUserAccount($("#username").val(), $("#password").val());
            //store the user account object to a text file
            fs.writeFile('userAccounts.txt', newUser, (err) => {
                if(err) throw err;
                console.log('User account saved');
            });

        };
    });
});	