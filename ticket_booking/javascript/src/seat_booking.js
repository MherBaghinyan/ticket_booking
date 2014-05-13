/**
 * Created by Mher on 5/8/14.
 */

    var Seat = function (flightNumber, status) {
        this.flightNumber = flightNumber;
        this.number = isNaN(this.number) ? 100 : this.number ++;
        this.seatStatus = status;
        alert(this.number);
    };

    var seatsArray = [];
    seatsArray.push(new Seat(initialFlightNumber, "AVAILABLE"));
    seatsArray.push(new Seat(initialFlightNumber, "RESERVED"));
    seatsArray.push(new Seat(initialFlightNumber, "AVAILABLE"));

    var viewModel = function(){
        this.availableSeats = ko.observableArray(seatsArray);
        this.selectedSeat = ko.observable() // Nothing selected by default

        this.saveDataAndContinue = function () {

        }
    };

    ko.applyBindings(new viewModel()); // This makes Knockout get to work