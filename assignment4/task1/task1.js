// task 1
// var city_name = "Hyderabad";
// document.write("City : ", city_name);
// city_name = city_name.replace("Hyder", "Islam");
// document.write("<br/>After replacement: ", city_name);

// task 2
// var num = "472";
// document.write("Value: ", num, "<br/>Type:", typeof(num));
// var num = parseInt(num);
// document.write("<br/>Value: ", num, "<br/>Type:", typeof(num));

// task3

var pwd = prompt("Please enter the password."," ");
var isPwdOk = false;
var code = pwd.charCodeAt(0)
do{
if(pwd.length>= 8){
    if(code >=48 && code <= 57 ){
        pwd = prompt("Please enter valid password","");
        isPwdOk = false;
    }
    else{        
        for(var i; i<pwd.length;i++){
            code = pwd.charCodeAt(i)
            if ((code>= 48 && code <=57) ||
                (code= 65 && code <= 90) || 
                (code>= 97 && code <= 122))
                {
                    isPwdOk = true ;
                } else {
               isPwdOk = false;
           }
        }
    }
}else{
    isPwdOk = false;
    pwd = prompt("Please enter valid password","");
}
}while(isPwdOk=== false);

