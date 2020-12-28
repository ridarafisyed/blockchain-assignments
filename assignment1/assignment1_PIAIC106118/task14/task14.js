var a = 2, b =1;
var result = --a - --b + ++b + b--;

/*
--a value of a = 1
--a - --b;  
    = --a - --b 
    = --2 - --1
    = 1   -   0
    = 1 
--a - --b + ++b;
    = (--a - --b) + ++b
    =    1       +   1
    =    2
--a - --b + ++b + b--;
    = (--a - --b + ++b) + b-- // the value of "b" assign first and then perform decrement operation
    =         2         + 1
    = 3


*/

document.write("a is " + a);
document.write("<br/>b is " + b);
document.write("<br/>result is " + result);
