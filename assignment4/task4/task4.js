//  task4

var text = "example@example.com";
document.write(text);

// get the location of @ 
var n = text.indexOf("@");

// get the location of dot.
var dot = text.indexOf(".");

// length of the text
var len = text.length;

for(var i= 0; i < n;i++){
    code = text.charCodeAt(i)
    if((code >= 48 && code <= 57)||(code >= 65 && code <= 90)||(code >= 97 && code <= 122)){
        isPwdOk = true;
    }else{                                                  
        isPwdOk = false;
    }
} 


// console.log("location of @",n, "location of dot",dot,"total lenght of text", len)
// if((n< dot) && (len > dot)){
//     console.log("im here ")
// }
