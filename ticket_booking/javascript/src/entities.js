/**
 * Created by Mher on 5/8/14.
 */

var Flight = function (flightNumber, model) {
    this.flightNumber = flightNumber;
    this.direction = model.destination();
    this.seatClass = model.selectedClass();
    this.ticketType = model.selectedType();
};

var Seat = function (flightNumber, status) {
    this.flightNumber = flightNumber;
    this.number;
    this.seatStatus = status;
};

var Ticket = function (model) {
    this.number;
    this.price;
}