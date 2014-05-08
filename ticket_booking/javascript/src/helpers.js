

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

var writeTicketData = function (data) {
    writeData("ticketData", data);
};

var updateTicketData = function (data) {
    updateData("ticketData", data);
};

var deleteTicketData = function () {
    deleteData("ticketData");
};

var getTicketData = function () {
    if (getLocalData("ticketData"))
        return getLocalData("ticketData");
    return null;
};

var getTicketDataField = function (field) {
    if (getLocalData("ticketData"))
        return getLocalData("ticketData")[field];
    return null;
};

var updateTicketDataField = function (key, value) {
    var obj = {};
    obj[key] = value;
    updateTicketData(obj);
};

var getRequestSettings = function () {
    return 0;
};

var getToken = function () {
    var userData = getTicketData();
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
