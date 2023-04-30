
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
            //temp solution before using a database
            let blob = new Blob([JSON.stringify(newUser)], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "userAccounts/userAccounts.txt");
        };
    });

    $("#login").submit(function(){
        //check if username and password are found in the text file
        //temp solution before using a database
        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();
        let userAccountFound = false;
        $.get("userAccounts.txt", function(data){
            if(data.includes(username) && data.includes(password)){
                userAccountFound = true;
            }
            else{
                userAccountFound = false;
            }
        }, "text");
        if(userAccountFound){
            alert("Login successful");
        }
        else{
            alert("Login failed");
        }
    });
});	