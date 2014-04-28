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
