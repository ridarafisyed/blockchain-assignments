// task 3

var pwd = prompt("Please enter the password."," ");
var isPwdOk = false;

// loop until the user enter the correct password.
do {
    
    var code = pwd.charCodeAt(0);
    if(pwd.length>= 8){
        if(!(code >=48 && code <= 57)){
            for(var i= 0; i < pwd.length;i++){
                code = pwd.charCodeAt(i)
                if((code >= 48 && code <= 57)||(code >= 65 && code <= 90)||(code >= 97 && code <= 122)){
                    isPwdOk = true;
                }else{
                    isPwdOk = false;
                }
            }        
        }
        else{        
            pwd = prompt("Please enter valid password","");
            isPwdOk = false;
        }
    }
    else{
        isPwdOk = false;
        pwd = prompt("Please enter a valid password","");
    }
}while(isPwdOk === false);
