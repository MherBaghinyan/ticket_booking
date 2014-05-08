/**
 * Created by Mher on 5/8/14.
 */

var headElement = document.getElementsByTagName('head')[0];
var initialFlightNumber = 1101;

var currentFlightNumber;

var appendToHead = function(url){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    headElement.appendChild(script);
};

appendToHead("javascript/knockout-3.1.0.js");
appendToHead("javascript/bootstrap.min.js");
appendToHead("javascript/src/entities.js");
appendToHead("javascript/src/helpers.js");