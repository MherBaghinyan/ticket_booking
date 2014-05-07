

var writeData = function () {
    var args = Array.prototype.slice.call(arguments);

    var key = args[0];
    var value = args[1];

    localStorage[key] = JSON.stringify(value);
};

var getLocalData = function (key) {
    if (localStorage[key] != null)
        return JSON.parse(localStorage[key]);
    return null;
};

var getJsonDataByKey = function (key, jsonKey) {
    if (localStorage[key] != null) {
        var data = JSON.parse(localStorage[key]);
        if (data == null)
            return null;
        return data[jsonKey];
    }
    else
        return null;
}

var updateData = function () {
    var args = Array.prototype.slice.call(arguments);

    var key = args[0];
    var values = args[1];

    var oldValues = JSON.parse(localStorage[key]);

    var newValues = merge(oldValues, values);

    localStorage[key] = JSON.stringify(newValues);
};


var getDataField = function (key, fieldName) {
    if (getLocalData(key))
        return getLocalData(key)[fieldName];
    return null;
};

var deleteData = function () {
    var args = Array.prototype.slice.call(arguments);

    var key = args[0];

    localStorage.removeItem(key);
};

var writeUserData = function (data) {
    writeData("userData", data);
};

var updateUserData = function (data) {
    updateData("userData", data);
};

var deleteUserData = function () {
    deleteData("userData");
};

var getUserData = function () {
    if (getLocalData("userData"))
        return getLocalData("userData");
    return null;
};

var getUserDataField = function (field) {
    if (getLocalData("userData"))
        return getLocalData("userData")[field];
    return null;
};

var updateUserDataField = function (key, value) {
    var obj = {};
    obj[key] = value;
    updateUserData(obj);
};

var getRequestSettings = function () {
    return 0;
};

var getToken = function () {
    var userData = getUserData();
    if (userData != null)
        return userData.token;
    return null;
}

//save data in localstorage
function writePlainData(key, value) {
    window.localStorage.setItem(key, value);
}

//get data from localstorage
function getData(key) {
    return window.localStorage.getItem(key);
}


function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
