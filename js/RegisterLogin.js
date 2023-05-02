
function CreateUserAccount(username, password){
	this.UserId = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
	this.username = username;
	this.password = password;
};
//check if username is already taken
function userNameExists(arr , username) {
    for(let i = 0; i < arr.length; i++){
        if((username) == arr[i].username){
            return true;
        }
    }
    return false;
}

$(document).ready(function(){
    let testArray = [];

    $("#newAccount").submit(function(e){
        e.preventDefault();
        let passwordNotMatch = $("#password").val() != $("#repeat-password").val();
        let usernameTaken = (testArray.length > 0) && userNameExists(testArray, $("#username").val());

        //check if password and confirm password match
        if(passwordNotMatch){
            alert("Passwords do not match");
            //clear the second password field
            $("#repeat-password").val("");
        }
        //check if username is already taken
        else if(usernameTaken){
            alert("Username already taken");
            //clear the username and password fields
            $("#username").val("");
            $("#password").val("");
            $("#repeat-password").val("");
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

    $("#login").submit(function(e){
        //insert test values to the array
        e.preventDefault();
        let testUser1 = new CreateUserAccount("test1", "test1");
        let testUser2 = new CreateUserAccount("test2", "test2");
        let testUser3 = new CreateUserAccount("test3", "test3");
        testArray.push(testUser1);
        testArray.push(testUser2);
        testArray.push(testUser3);
        console.log(testArray);

        //check if username and password match
        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();
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