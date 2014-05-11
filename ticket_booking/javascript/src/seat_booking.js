/**
 * Created by Mher on 5/8/14.
 */

var Seat = function (flightNumber, status) {
    this.flightNumber = flightNumber;
    this.number;
    this.seatStatus = status;
};

var viewModel = function(){
    this.availableSeats = ko.observableArray([
        new Seat(1101, "AVAILABLE"),
        new Seat(1101, "RESERVED"),
        new Seat(1101, "AVAILABLE")
    ]);
    this.selectedSeat = ko.observable() // Nothing selected by default

    this.saveDataAndContinue = function () {

    }
};

ko.applyBindings(new viewModel()); // This makes Knockout get to work