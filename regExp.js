//regExp.js

// validate hex color
var validateHexColor = function(hexColor)
{
     var validator = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;   
     return validator.test(hexColor);
};

// validate GUID
var validateGUID = function(token)
{
     var validator = /^(\{|\()?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}(\}|\))?$/;   
     return validator.test(token);
};

//ip v 4 validator
var validateIp = function(ip)
{
     var validator = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;   
     return validator.test(ip);
};

//email validator
var validateEmail = function(email)
{
     var validator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;   
     return validator.test(email);
};

//password validator
var validatePassword = function(password)
{
     var validator = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/;   
     return validator.test(password);
};

//validate 6 symbols length number
var validateNumber = function(number)
{ 
     var validator = /^([0-9]){6}/;   
     return validator.test(number);
};

